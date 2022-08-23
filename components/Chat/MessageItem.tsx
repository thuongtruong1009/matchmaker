import Image from 'next/image';
import React from 'react';

type Props = {
    messages: IMessageItem[];
    isMe: boolean;
};

const MessageItem = ({ messages, isMe }: Props) => {
    if (isMe)
        return (
            <>
                {messages.map((message, index) => {
                    if (message.type === 'text') {
                        return (
                            <div className="ml-auto" key={index}>
                                <p className="bg-main-purple max-w-[250px] py-2.5 px-4 rounded-3xl rounded-tr-none body-2 text-white text-justify break-words">
                                    {message.value}
                                </p>
                            </div>
                        );
                    } else if (message.type === 'image') {
                        return (
                            <div className="ml-auto" key={index}>
                                <div className="image-container max-w-[200px] rounded-xl overflow-hidden w-full">
                                    <Image className="image" src={message.value} alt="img" layout="fill" />
                                </div>
                            </div>
                        );
                    }
                })}
            </>
        );
    return (
        <>
            {messages.map((message, index) => {
                if (message.type === 'text') {
                    return (
                        <div className="mr-auto" key={index}>
                            <p className="bg-neutral-5 max-w-[250px] py-2.5 px-4 rounded-3xl rounded-tl-none body-2 text-left text-main-grey break-words">
                                {message.value}
                            </p>
                        </div>
                    );
                } else if (message.type === 'image') {
                    return (
                        <div className="mr-auto" key={index}>
                            <div className="image-container max-w-[200px] rounded-xl overflow-hidden w-full">
                                <Image className="image" src={message.value} alt="img" layout="fill" />
                            </div>
                        </div>
                    );
                }
            })}
        </>
    );
};

export default MessageItem;
