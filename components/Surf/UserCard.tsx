import Image from 'next/image';
import CloseIcon from '../Icons/CloseIcon';
import HeartIcon from '../Icons/HeartIcon';
import InformationIcon from '../Icons/InformationIcon';
import LocationIcon from '../Icons/LocationIcon';
import CircleButton from '../Home/CircleButton';

type Props = {
    user: IDataFindFriendsAroundResponse;
    onSeen: (user: IDataFindFriendsAroundResponse) => () => void;
    onLike: (_id: string) => void;
    onBlock: (_id: string) => void;
};

const UserCard = ({ user, onSeen, onLike, onBlock }: Props) => {
    return (
        <div className="rounded-[40px] h-[70vh] relative before:absolute before:inset-0 before:bg-card before:z-10">
            <div className="w-full h-full image-container">
                <Image
                    className="object-cover image"
                    alt="avatar"
                    objectPosition="top"
                    layout="fill"
                    src={user.avatar}
                />
            </div>
            <div className="absolute bottom-0 z-20 w-full px-4">
                <div className="justify-between mb-2 flex-center-y">
                    <h3 className="text-white">
                        {user.name.firstName + ' ' + user.name.lastName}, {user.age && user.age + 't'}
                    </h3>

                    <button onClick={onSeen(user)}>
                        <InformationIcon />
                    </button>
                </div>

                <div className="px-2 py-1 bg-white flex-center-y rounded-[25px] w-fit gap-2 mb-7">
                    <LocationIcon />
                    <span className="text-caption-1 leading-caption-1">Cách {user.distance}m</span>
                </div>

                <div className="justify-center gap-10 mb-6 flex-center-y">
                    <CircleButton
                        Icon={<CloseIcon />}
                        onClick={() => {
                            onBlock(user._id);
                        }}
                    />
                    <CircleButton
                        Icon={<HeartIcon />}
                        onClick={() => {
                            onLike(user._id);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default UserCard;
