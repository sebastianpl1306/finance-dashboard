import { ReactNode } from "react";
import { IoClose } from "react-icons/io5";
import { Button } from "../buttons/Button";

interface Props {
    title?: string;
    isOpen: boolean;
    handleCloseModal: () => void;
    showClose?: boolean;
    btnAction?: () => void;
    children: ReactNode
}

export const Modal = ({ title, children, handleCloseModal, isOpen, btnAction, showClose = true }: Props) => {
    return (
        <div className="fixed z-10 inset-0 flex items-center justify-center" style={{ display: isOpen ? 'flex' : 'none' }}>
            <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-xl max-w-screen-md w-full m-4">
                <div className="flex px-6 py-4 justify-between">
                    <h3 className="text-lg leading-6 font-bold font-poppins">{ title }</h3>
                    {
                        showClose && (
                            <button className="cursor-pointer" type="button" onClick={handleCloseModal}>
                                <IoClose size={30}/>
                            </button>
                        )
                    }
                </div>
                <div className="prose max-w-screen-md p-6 overflow-y-auto bg-white" style={{maxHeight: '70vh', borderRadius: '0.375rem'}}>
                    { children }
                </div>
                <div className="bg-gray-100 px-4 py-3 sm:px-6 flex align-items justify-end p-4 gap-4 flex-row">
                    {btnAction && (<Button text="Aceptar" onClick={btnAction}/>)}
                    {/* <button type="button" onClick={btnAction} className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400  sm:w-auto sm:text-sm"> Accept </button> */}
                </div>
            </div>
        </div>
    )
}