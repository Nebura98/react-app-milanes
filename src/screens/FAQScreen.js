import React from 'react';
import  undraw_Online_calendar_re_wk3t  from '../assets/img/undraw_Online_calendar_re_wk3t.svg';
import  undraw_Online_messaging_re_qft3 from '../assets/img/undraw_Online_messaging_re_qft3.svg';
import  undraw_Mailbox_re_dvds          from '../assets/img/undraw_Mailbox_re_dvds.svg';
import  undraw_subscriptions_re_k7jj    from '../assets/img/undraw_subscriptions_re_k7jj.svg';

export const FAQScreen = () => {
    return (
        <div className="container-fluid mb-2">
            <div className="row mt-5 g-4">
                <div className="col-12 col-md-3">
                    <div className="card">
                        <img className="img-fluid " src={ undraw_Online_calendar_re_wk3t } alt="" style={{height:200}}/>
                        <div className="card-header">
                            <h5 className="card-title">
                                Horarios de atención
                            </h5>
                        </div>
                        <div className="card-body align-items-center" style={{height:90}}>
                            <p className="card-text">
                            Lunes a Sábados 7:00 a.m a 5:00 p.m
                            </p>
                        </div> 
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <div className="card">
                        <img className="img-fluid" src={ undraw_Online_messaging_re_qft3 } alt="" style={{height:200}}/>
                        <div className="card-header">
                            <h5 className="card-title">
                                Números telefonicos
                            </h5>
                        </div>
                        <div className="card-body align-items-center" style={{height:90}}>
                            <div className="d-flex flex-column">
                                <div className="m-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                </svg>
                                <span className="ms-2">
                                    2669-0129
                                </span>
                                </div>
                                <div className="m-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone-outbound" viewBox="0 0 16 16">
                                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z"/>
                                    </svg>
                                    <span className="ms-2">
                                        8542-1111
                                    </span> 
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <div className="card">
                        <img className="img-fluid " src={ undraw_Mailbox_re_dvds } alt="" style={{height:200}}/>
                        <div className="card-header">
                            <h5 className="card-title">
                                Correo electronico
                            </h5>
                        </div>
                        <div className="card-body align-items-center" style={{height:90}}>
                            <p className="card-text">
                                comercialmilanes@gmail.com
                            </p>
                        </div>  
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <div className="card">
                        <img className="img-fluid " src={ undraw_subscriptions_re_k7jj } alt="" style={{height:200}}/>
                        <div className="card-header">
                            <h5 className="card-title">
                                Siguenos en Facebook
                            </h5>
                        </div>
                        <div className="card-body align-items-center" style={{height:90}}>
                            <a
                                className="stretched-link"
                                href="https://www.facebook.com/comercialmilanes/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Comercial Milanés
                            </a>
                        </div> 
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-2 mb-4">
                <div className="animate__animated animate__fadeInDown">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">
                                Localización de nuestro inmueble 
                            </h5>
                        </div>
                        <div className="card-body align-items-center" >
                            <div className="ratio ratio-16x9">
                                <iframe 
                                    title="Mapa del Cormercial Milanés"
                                    className="img-thumbnail"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.9078524516135!2d-85.09462328520226!3d10.428886792557947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f9ffac694bb95d1%3A0x78bec026379bd72c!2sComercial%20Milanes!5e0!3m2!1ses-419!2scr!4v1615522426371!5m2!1ses-419!2scr" 
                                    loading="lazy">
                                </iframe>
                            </div>
                        </div>
                        <div className="card-footer">
                            <span className="fw-bold">Dirección:</span> Calle Central, costado oeste de Gimnasio Municipal de Cañas, Provincia de Guanacaste, Cañas.
                        </div>
                    </div>
                </div>    
            </div>           
        </div>
    )
}
