import {ModalContext, ModalTypes} from "@/context/ModalContext";
import {useContext} from "react";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle, DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";

const Content_Project_Detail_Modal = () => {

    const {modalState, closeModal} = useContext(ModalContext)

    return (
        <Dialog open={modalState[ModalTypes.CONTENT_PROJECT_DETAIL].isVisible}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Share link</DialogTitle>
                    <DialogDescription>
                        Anyone who has this link will be able to view this.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    test
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button
                            type="button"
                            variant="secondary"
                            onClick={() => {
                                closeModal({name: ModalTypes.CONTENT_PROJECT_DETAIL})
                            }}
                        >
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default Content_Project_Detail_Modal;