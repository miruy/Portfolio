'use client'

import React, {ReactNode, useState} from "react";

interface IModalContext {
    modalState: IModal;
    openModal: (modalOptions: IOpenModal<ModalTypes>) => void;
    closeModal: (closeOptions: ICloseModal) => void;
}

export enum ModalTypes {

    // 메모 검색
    MEMO_SEARCH = "MEMO_SEARCH",

    // 메모 댓글/답글 삭제
    MEMO_COMMENT_DELETE = "MEMO_COMMENT_DELETE",
}

type IModal = {
    // 메모 검색
    [ModalTypes.MEMO_SEARCH]: {
        isVisible: boolean,
        data: {},
    },

    // 메모 댓글/답글 삭제
    [ModalTypes.MEMO_COMMENT_DELETE]: {
        isVisible: boolean,
        data: {
            memoId: string,
            commentId: string,
        },
    },
}

const initialModalState: IModal = {
    // 메모 검색
    [ModalTypes.MEMO_SEARCH]: {
        isVisible: false,
        data: {},
    },

    // 메모 댓글/답글 삭제
    [ModalTypes.MEMO_COMMENT_DELETE]: {
        isVisible: false,
        data: {
            memoId: "",
            commentId: "",
        },
    },
};

export const ModalContext = React.createContext<IModalContext>({
    modalState: initialModalState,
    openModal: ({name, data}) => {
        console.log("Opening modal:", name, "with data:", data);
    },
    closeModal: ({name}) => {
        console.log("Closing modal:", name);
    },
});

export type IOpenModal<T extends ModalTypes> = {
    name: T;
    data?: IModal[T]['data'];
}

export type ICloseModal = {
    name: ModalTypes;
}

export function ModalProvider({children}: { children: ReactNode }) {
    const [modalState, setModalState] = useState<IModal>(initialModalState);

    const openModal: IModalContext["openModal"] = ({name, data}) => {
        setModalState((prev) => ({
            ...prev,
            [name]: {isVisible: true, data: data ?? {}},
        }));
    };

    const closeModal: IModalContext["closeModal"] = ({name}) => {
        setModalState((prev) => ({
            ...prev,
            [name]: {isVisible: false, data: initialModalState[name].data}, // 기본 상태로 복원합니다.
        }));
    };

    const contextValue = {
        modalState,
        openModal,
        closeModal,
    }

    return <ModalContext.Provider value={contextValue}>{children}</ModalContext.Provider>;
}