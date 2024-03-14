import { TabContext } from '@/contexts/tab-context';
import { useContext } from 'react';

const useTabContext = () => {
    const tabContext = useContext(TabContext);
    if (!tabContext) {
        throw new Error('TabContext is not found');
    }
    return tabContext;
};

export default useTabContext;
