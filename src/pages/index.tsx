import TabMenuLayout from '@/components/some-tab-menu/layout';
import TabContextProvider from '@/contexts/tab-context-provider';

const Home = () => {
    return (
        <TabContextProvider>
            <TabMenuLayout />
        </TabContextProvider>
    );
};

export default Home;
