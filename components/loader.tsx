import React from 'react';
import Image from "next/image";

const Loader = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center gap-y-4">
            <div className="w-10 h-10 relative animate-spin">
                <Image src="/logo.png" alt="logo" fill/>
            </div>
            <p className="text-sm text-muted-foreground">
                SparkGen is thinking ...
            </p>
        </div>
    );
};

export default Loader;
