import { create } from 'zustand'
import { Transaction, TransactionState } from '@/interfaces';

interface State extends TransactionState {
    toggleUpdateTransactionModal: (newValue: boolean) => void;
    setCurrentTransaction: (transaction: Transaction | null) => void;
}

export const useTransactionStore = create<State>()((set) => ({
    isOpenEditTransactionModal: false,
    currentTransaction: null,
    toggleUpdateTransactionModal: (newValue: boolean) => {
        set({ isOpenEditTransactionModal: newValue })
    },
    setCurrentTransaction: (transaction: Transaction | null) => {
        set({ currentTransaction: transaction })
    }
}))