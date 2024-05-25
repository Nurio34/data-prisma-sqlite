import { Toaster } from "react-hot-toast";

type ProvidersProps = {
    children: React.ReactNode;
};

function Providers({ children }: ProvidersProps) {
    return (
        <>
            <Toaster />
            {children}
        </>
    );
}

export default Providers;
