import '../css/Auth.css';
import { Camera } from './Camera';
import { FormTabs } from './FormTabs';

export const Auth = () => {
    return (
        <div className="container wrap-login100">
            <div className="row">
    <div className="col-lg-6 col-md-12 order-lg-1 order-md-2 order-2 r-side">
        <FormTabs style={{ paddingRight: '15px' }} /> 
    </div>
    <div className="col-lg-6 col-md-12 order-lg-2 order-md-1 order-1 l-side">
        <Camera />                        
    </div>
</div>


        </div>
    );
};
