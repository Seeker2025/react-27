import { useCustomContext } from "../Context/Context";

export const Alert = () => {
    const context = useCustomContext();
    console.log('Alert');
    

                return (
                    context.toggleValue && (
                        <div>Message</div>
                    )
                )
}
