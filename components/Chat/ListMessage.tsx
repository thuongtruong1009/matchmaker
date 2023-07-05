import { useEffect, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { conversationGet } from '../../redux/actions/conversationActions';
import { selectConversation } from '../../redux/reducers/conversationSlice';
import { toastError } from '../../utils/toast';
import MessageItem from './MessageItem';

interface Props {
    userId?: string;
    className: string;
    conversationId: string;
}

export default function ListMessage({ userId, className, conversationId }: Props) {
    const data = useAppSelector(selectConversation).data.find(
        (conversation) => conversation.conversation._id === conversationId,
    );
    const dispatch = useAppDispatch();

    async function fetchConversation(page: number, limit: number) {
        if (data)
            try {
                await dispatch(conversationGet({ id: conversationId, limit, page })).unwrap();
                console.log('zo day');
            } catch (error) {
                toastError((error as IResponseError).error);
            }
    }
    useEffect(() => {
        if (data) {
            if (!data.page && !data.limit && data.next) {
                fetchConversation(
                    +(process.env.MESSAGE_PAGE_DEFAULT as string),
                    +(process.env.MESSAGE_LIMIT_DEFAULT as string),
                );
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);
    return (
        <>
            <div id="scrollableDiv" className={`${className} flex flex-col-reverse overflow-auto `}>
                {data?.conversation.messages && (
                    <InfiniteScroll
                        dataLength={data.conversation.messages.length}
                        next={() => {
                            if (data.next) {
                                fetchConversation(
                                    data.page ? data.page + 1 : +(process.env.MESSAGE_PAGE_DEFAULT as string),
                                    data.limit ? data.limit : +(process.env.MESSAGE_LIMIT_DEFAULT as string),
                                );
                            }
                        }}
                        className="gap-4 px-4 py-2"
                        style={{ display: 'flex', flexDirection: 'column-reverse' }}
                        inverse={true} //
                        hasMore={data.next}
                        loader={<p className="text-sm font-semibold text-center">Đang tải...</p>}
                        scrollableTarget="scrollableDiv"
                    >
                        {data.conversation.messages?.map((message) => (
                            <MessageItem
                                key={message._id}
                                isMe={message.senderId._id === userId}
                                messages={message.messages}
                            />
                        ))}
                    </InfiniteScroll>
                )}
            </div>
        </>
    );
}
