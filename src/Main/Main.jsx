import { useCustomContext } from "../Context/Context";

export const Main = () => {
    const context = useCustomContext();
    console.log(context);
    
        return (
            <div>
                <h1>Hello Context</h1>

                <button
                    onClick = {() => context.toggle(!context.toggleValue)}
                >
                    Open Alert
                </button>
            </div>
        )
}

