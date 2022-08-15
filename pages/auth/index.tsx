import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

// import * as Yup from 'yup';
import { useCookies } from 'react-cookie';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';
import { UserContextType } from '../../types/context/user';

const Signin: NextPage = () => {
    const router = useRouter();
    const { savePhone } = useContext(UserContext) as UserContextType;
    const { register, handleSubmit } = useForm();
    const [phone, setPhone] = useState<any | undefined>();
    const [cookies, setCookie, removeCookie] = useCookies(['errMessage']);

    const loginWithGoogle = () => {
        window.open(`${process.env.URL_LOGIN_WITH_GOOGLE}`, '_self');
    };
    const loginWithFacebook = () => {
        window.open(`${process.env.URL_LOGIN_WITH_FACEBOOK}`, '_self');
    };

    const onSubmit = async (data: any) => {
        const response = await fetch(`${process.env.LOGIN_WITH_PHONE_LOGIN}`, {
            method: 'POST',
            body: JSON.stringify({
                phone: phone,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            const errorResult = await response.json();
            alert(errorResult.error);
        } else {
            savePhone(phone);
            router.push('/auth/otp');
        }
    };
    console.log(cookies.errMessage);
    if (cookies.errMessage) {
        alert(cookies.errMessage);
        removeCookie('errMessage');
    }

    return (
        <div className="flex flex-col justify-center max-w-md mx-auto">
            <section className="flex flex-col pb-2 border-b-2">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <PhoneInput
                        {...register('phone', { required: true })}
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={(value) => setPhone(value)}
                        countries={['VN']}
                        defaultCountry="VN"
                    />
                    <button className="px-1 py-2 text-white uppercase bg-blue-400 rounded-md" type="submit">
                        Submit
                    </button>
                </form>
            </section>
            <section className="flex flex-col mt-2 space-y-2">
                <button className="px-1 py-2 text-white bg-red-400 border rounded-md" onClick={loginWithGoogle}>
                    Sigin with Google
                </button>
                <button className="px-1 py-2 text-white bg-blue-400 border rounded-md" onClick={loginWithFacebook}>
                    Sigin with Facebook
                </button>
            </section>
        </div>
    );
};

export default Signin;
