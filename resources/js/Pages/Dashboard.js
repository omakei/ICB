import React from 'react'
import BlockCard from '../Shared/BlockCard'
import Layout from '@/Shared/Layout';


const Dashboard =  ()=>{

    return (
        <div className="content">
        <div className="row js-appear-enabled animated fadeIn" data-toggle="appear">
            <div className="col-6 col-xl-3">
                <a className="block block-link-shadow text-right" href="#">
                    <div className="block-content block-content-full clearfix">
                        <div className="float-left mt-10 d-none d-sm-block">
                            <i className="si si-users fa-3x text-body-bg-dark"></i>
                        </div>
                        <div className="font-size-h3 font-w600 js-count-to-enabled" data-toggle="countTo" data-speed="10" data-to="15">15</div>
                        <div className="font-size-sm font-w600 text-uppercase text-muted">Consaltanis</div>
                    </div>
                </a>
            </div>
            <div className="col-6 col-xl-3">
                <a className="block block-link-shadow text-right" href="#">
                    <div className="block-content block-content-full clearfix">
                        <div className="float-left mt-10 d-none d-sm-block">
                            <i className="si si-wallet fa-3x text-body-bg-dark"></i>
                        </div>
                        <div className="font-size-h3 font-w600">Tsh<span data-toggle="countTo" data-speed="1000" data-to="1000000000" className="js-count-to-enabled">1000000000</span></div>
                        <div className="font-size-sm font-w600 text-uppercase text-muted">Earnings</div>
                    </div>
                </a>
            </div>
            <div className="col-6 col-xl-3">
                <a className="block block-link-shadow text-right" href="#">
                    <div className="block-content block-content-full clearfix">
                        <div className="float-left mt-10 d-none d-sm-block">
                            <i className="si si-bag fa-3x text-body-bg-dark"></i>
                        </div>
                        <div className="font-size-h3 font-w600 js-count-to-enabled" data-toggle="countTo" data-speed="1000" data-to="15">15</div>
                        <div className="font-size-sm font-w600 text-uppercase text-muted">Finished Projects</div>
                    </div>
                </a>
            </div>
            <div className="col-6 col-xl-3">
                <a className="block block-link-shadow text-right" href="#">
                    <div className="block-content block-content-full clearfix">
                        <div className="float-left mt-10 d-none d-sm-block">
                            <i className="si si-bag fa-3x text-body-bg-dark"></i>
                        </div>
                        <div className="font-size-h3 font-w600 js-count-to-enabled" data-toggle="countTo" data-speed="1000" data-to="10">10</div>
                        <div className="font-size-sm font-w600 text-uppercase text-muted">Unfished Projects</div>
                    </div>
                </a>
            </div>
        </div>
        <div className="row js-appear-enabled animated fadeIn" data-toggle="appear">
            <div className="col-md-6">
                <div className="block">
                    <div className="block-header">
                        <h3 className="block-title">
                            ICB Earnings  <small>This year</small>
                        </h3>
                        <div className="block-options">
                            <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                                <i className="si si-refresh"></i>
                            </button>
                            <button type="button" className="btn-block-option">
                                <i className="si si-wrench"></i>
                            </button>
                        </div>
                    </div>
                    <div className="block-content block-content-full">
                        <div className="pull-all"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                            <canvas className="js-chartjs-dashboard-lines chartjs-render-monitor" style={{display: 'block', width: '521px', height: '260px'}} width="521" height="260"></canvas>
                        </div>
                    </div>
                    <div className="block-content">
                        <div className="row items-push">
                            <div className="col-6 col-sm-4 text-center text-sm-left">
                                <div className="font-size-sm font-w600 text-uppercase text-muted">This Month</div>
                                <div className="font-size-h4 font-w600">720</div>
                                <div className="font-w600 text-success">
                                    <i className="fa fa-caret-up"></i> +16%
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 text-center text-sm-left">
                                <div className="font-size-sm font-w600 text-uppercase text-muted">This Week</div>
                                <div className="font-size-h4 font-w600">160</div>
                                <div className="font-w600 text-danger">
                                    <i className="fa fa-caret-down"></i> -3%
                                </div>
                            </div>
                            <div className="col-12 col-sm-4 text-center text-sm-left">
                                <div className="font-size-sm font-w600 text-uppercase text-muted">Average</div>
                                <div className="font-size-h4 font-w600">24.3</div>
                                <div className="font-w600 text-success">
                                    <i className="fa fa-caret-up"></i> +9%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="block">
                    <div className="block-header">
                        <h3 className="block-title">
                           Institute Earnings <small>This year</small>
                        </h3>
                        <div className="block-options">
                            <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                                <i className="si si-refresh"></i>
                            </button>
                            <button type="button" className="btn-block-option">
                                <i className="si si-wrench"></i>
                            </button>
                        </div>
                    </div>
                    <div className="block-content block-content-full">
                        <div className="pull-all"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                            <canvas className="js-chartjs-dashboard-lines2 chartjs-render-monitor" style={{display: 'block', width: '521px', height: '260px'}} width="521" height="260"></canvas>
                        </div>
                    </div>
                    <div className="block-content bg-white">
                        <div className="row items-push">
                            <div className="col-6 col-sm-4 text-center text-sm-left">
                                <div className="font-size-sm font-w600 text-uppercase text-muted">This Month</div>
                                <div className="font-size-h4 font-w600">$ 6,540</div>
                                <div className="font-w600 text-success">
                                    <i className="fa fa-caret-up"></i> +4%
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 text-center text-sm-left">
                                <div className="font-size-sm font-w600 text-uppercase text-muted">This Week</div>
                                <div className="font-size-h4 font-w600">$ 1,525</div>
                                <div className="font-w600 text-danger">
                                    <i className="fa fa-caret-down"></i> -7%
                                </div>
                            </div>
                            <div className="col-12 col-sm-4 text-center text-sm-left">
                                <div className="font-size-sm font-w600 text-uppercase text-muted">Balance</div>
                                <div className="font-size-h4 font-w600">$ 9,352</div>
                                <div className="font-w600 text-success">
                                    <i className="fa fa-caret-up"></i> +35%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row js-appear-enabled animated fadeIn" data-toggle="appear">
            <div className="col-md-6">
                <div className="block">
                    <div className="block-header">
                        <h3 className="block-title">
                        Department Earnings <small>This year</small>
                        </h3>
                        <div className="block-options">
                            <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                                <i className="si si-refresh"></i>
                            </button>
                            <button type="button" className="btn-block-option">
                                <i className="si si-wrench"></i>
                            </button>
                        </div>
                    </div>
                    <div className="block-content block-content-full">
                        <div className="pull-all"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                            <canvas className="js-chartjs-dashboard-lines chartjs-render-monitor" style={{display: 'block', width: '521px', height: '260px'}} width="521" height="260"></canvas>
                        </div>
                    </div>
                    <div className="block-content">
                        <div className="row items-push">
                            <div className="col-6 col-sm-4 text-center text-sm-left">
                                <div className="font-size-sm font-w600 text-uppercase text-muted">This Month</div>
                                <div className="font-size-h4 font-w600">720</div>
                                <div className="font-w600 text-success">
                                    <i className="fa fa-caret-up"></i> +16%
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 text-center text-sm-left">
                                <div className="font-size-sm font-w600 text-uppercase text-muted">This Week</div>
                                <div className="font-size-h4 font-w600">160</div>
                                <div className="font-w600 text-danger">
                                    <i className="fa fa-caret-down"></i> -3%
                                </div>
                            </div>
                            <div className="col-12 col-sm-4 text-center text-sm-left">
                                <div className="font-size-sm font-w600 text-uppercase text-muted">Average</div>
                                <div className="font-size-h4 font-w600">24.3</div>
                                <div className="font-w600 text-success">
                                    <i className="fa fa-caret-up"></i> +9%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="block">
                    <div className="block-header">
                        <h3 className="block-title">
                            Consaltants Earnings <small>This year</small>
                        </h3>
                        <div className="block-options">
                            <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                                <i className="si si-refresh"></i>
                            </button>
                            <button type="button" className="btn-block-option">
                                <i className="si si-wrench"></i>
                            </button>
                        </div>
                    </div>
                    <div className="block-content block-content-full">
                        <div className="pull-all"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                            <canvas className="js-chartjs-dashboard-lines2 chartjs-render-monitor" style={{display: 'block', width: '521px', height: '260px'}} width="521" height="260"></canvas>
                        </div>
                    </div>
                    <div className="block-content bg-white">
                        <div className="row items-push">
                            <div className="col-6 col-sm-4 text-center text-sm-left">
                                <div className="font-size-sm font-w600 text-uppercase text-muted">This Month</div>
                                <div className="font-size-h4 font-w600">$ 6,540</div>
                                <div className="font-w600 text-success">
                                    <i className="fa fa-caret-up"></i> +4%
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 text-center text-sm-left">
                                <div className="font-size-sm font-w600 text-uppercase text-muted">This Week</div>
                                <div className="font-size-h4 font-w600">$ 1,525</div>
                                <div className="font-w600 text-danger">
                                    <i className="fa fa-caret-down"></i> -7%
                                </div>
                            </div>
                            <div className="col-12 col-sm-4 text-center text-sm-left">
                                <div className="font-size-sm font-w600 text-uppercase text-muted">Balance</div>
                                <div className="font-size-h4 font-w600">$ 9,352</div>
                                <div className="font-w600 text-success">
                                    <i className="fa fa-caret-up"></i> +35%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
Dashboard.layout = page => <Layout children={page} />;

export default Dashboard;
