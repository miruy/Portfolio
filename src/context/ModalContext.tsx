'use client'

import React, {ReactNode, useState} from "react";

interface IModalContext {
    modalState: IModal;
    openModal: (modalOptions: IOpenModal<ModalTypes>) => void;
    closeModal: (closeOptions: ICloseModal) => void;
}

export enum ModalTypes {

    // 프로젝트 상세보기
    CONTENT_PROJECT_DETAIL = "CONTENT_PROJECT_DETAIL",

    // 프로젝트 이미지 크게보기
    CONTENT_PROJECT_IMAGE_EXPANSION = "CONTENT_PROJECT_IMAGE_EXPANSION",
}

type IModal = {
    // 프로젝트 상세보기
    [ModalTypes.CONTENT_PROJECT_DETAIL]: {
        isVisible: boolean,
        data: {
            title: string,
            description: string,
            git: string,
            url: string,
        },
    },

    // 메모 댓글/답글 삭제
    [ModalTypes.CONTENT_PROJECT_IMAGE_EXPANSION]: {
        isVisible: boolean,
        data: {
            key: string,
            imageSrcs: string[]
        },
    },
}

const initialModalState: IModal = {
    // 프로젝트 메모코드 상세보기
    [ModalTypes.CONTENT_PROJECT_DETAIL]: {
        isVisible: false,
        data: {
            title: "",
            description: "",
            git: "",
            url: ""
        },
    },

    // 메모 댓글/답글 삭제
    [ModalTypes.CONTENT_PROJECT_IMAGE_EXPANSION]: {
        isVisible: false,
        data: {
            key: "",
            imageSrcs: []
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