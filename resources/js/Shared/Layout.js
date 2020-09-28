import React from 'react';
import MainMenu from '@/Shared/MainMenu';
import FlashMessages from '@/Shared/FlashMessages';
import TopHeader from '@/Shared/TopHeader';
import BottomHeader from '@/Shared/BottomHeader';
import { usePage } from '@inertiajs/inertia-react'

export default ({ children }) => {

    const { user } = usePage()

  return (
    <div id="page-container" className="sidebar-o enable-page-overlay side-scroll page-header-modern main-content-boxed">
    {/* <!-- Side Overlay--> */}
    <aside id="side-overlay">
        {/* <!-- Side Header --> */}
        <div className="content-header content-header-fullrow">
            <div className="content-header-section align-parent">
                {/* <!-- Close Side Overlay --> */}
                {/* <!-- Layout API, functionality initialized in Template._uiApiLayout() --> */}
                <button type="button" className="btn btn-circle btn-dual-secondary align-v-r" data-toggle="layout" data-action="side_overlay_close">
                    <i className="fa fa-times text-danger"></i>
                </button>
                {/* <!-- END Close Side Overlay --> */}

                {/* <!-- User Info --> */}
                <div className="content-header-item">
                    <a className="img-link mr-5" href="be_pages_generic_profile.html">
                        <img className="img-avatar img-avatar32" src="assets/media/avatars/avatar15.jpg" alt=""/>
                    </a>
                    <a className="align-middle link-effect text-primary-dark font-w600" href="be_pages_generic_profile.html">John Smith</a>
                </div>
                {/* <!-- END User Info --> */}
            </div>
        </div>
        {/* <!-- END Side Header --> */}

        {/* <!-- Side Content --> */}
        <div className="content-side">
            {/* <!-- Search --> */}
            <div className="block pull-t pull-r-l">
                <div className="block-content block-content-full block-content-sm bg-body-light">
                    <form action="be_pages_generic_search.html" method="post">
                        <div className="input-group">
                            <input type="text" className="form-control" id="side-overlay-search" name="side-overlay-search" placeholder="Search.."/>
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-secondary px-10">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* <!-- END Search --> */}

            {/* <!-- Mini Stats --> */}
            <div className="block pull-r-l">
                <div className="block-content block-content-full block-content-sm bg-body-light">
                    <div className="row">
                        <div className="col-4">
                            <div className="font-size-sm font-w600 text-uppercase text-muted">Clients</div>
                            <div className="font-size-h4">460</div>
                        </div>
                        <div className="col-4">
                            <div className="font-size-sm font-w600 text-uppercase text-muted">Sales</div>
                            <div className="font-size-h4">728</div>
                        </div>
                        <div className="col-4">
                            <div className="font-size-sm font-w600 text-uppercase text-muted">Earnings</div>
                            <div className="font-size-h4">$7,860</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- END Mini Stats --> */}

            {/* <!-- Friends --> */}
            <div className="block pull-r-l">
                <div className="block-header bg-body-light">
                    <h3 className="block-title"><i className="fa fa-fw fa-users font-size-default mr-5"></i>Friends</h3>
                    <div className="block-options">
                        <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                            <i className="si si-refresh"></i>
                        </button>
                        <button type="button" className="btn-block-option" data-toggle="block-option" data-action="content_toggle"></button>
                    </div>
                </div>
                <div className="block-content">
                    <ul className="nav-users push">
                        <li>
                            <a href="be_pages_generic_profile.html">
                                <img className="img-avatar" src="assets/media/avatars/avatar4.jpg" alt=""/>
                                <i className="fa fa-circle text-success"></i> Lori Grant
                                <div className="font-w400 font-size-xs text-muted">Photographer</div>
                            </a>
                        </li>
                        <li>
                            <a href="be_pages_generic_profile.html">
                                <img className="img-avatar" src="assets/media/avatars/avatar11.jpg" alt=""/>
                                <i className="fa fa-circle text-success"></i> Carl Wells
                                <div className="font-w400 font-size-xs text-muted">Web Designer</div>
                            </a>
                        </li>
                        <li>
                            <a href="be_pages_generic_profile.html">
                                <img className="img-avatar" src="assets/media/avatars/avatar1.jpg" alt=""/>
                                <i className="fa fa-circle text-warning"></i> Lori Grant
                                <div className="font-w400 font-size-xs text-muted">UI Designer</div>
                            </a>
                        </li>
                        <li>
                            <a href="be_pages_generic_profile.html">
                                <img className="img-avatar" src="assets/media/avatars/avatar10.jpg" alt=""/>
                                <i className="fa fa-circle text-danger"></i> Jose Mills
                                <div className="font-w400 font-size-xs text-muted">Copywriter</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <!-- END Friends --> */}

            {/* <!-- Activity --> */}
            <div className="block pull-r-l">
                <div className="block-header bg-body-light">
                    <h3 className="block-title">
                        <i className="fa fa-fw fa-clock-o font-size-default mr-5"></i>Activity
                    </h3>
                    <div className="block-options">
                        <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                            <i className="si si-refresh"></i>
                        </button>
                        <button type="button" className="btn-block-option" data-toggle="block-option" data-action="content_toggle"></button>
                    </div>
                </div>
                <div className="block-content">
                    <ul className="list list-activity">
                        <li>
                            <i className="si si-wallet text-success"></i>
                            <div className="font-w600">+$29 New sale</div>
                            <div>
                                <a href="javascript:void(0)">Admin Template</a>
                            </div>
                            <div className="font-size-xs text-muted">5 min ago</div>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <!-- END Activity --> */}

            {/* <!-- Profile --> */}
            <div className="block pull-r-l">
                <div className="block-header bg-body-light">
                    <h3 className="block-title">
                        <i className="fa fa-fw fa-pencil font-size-default mr-5"></i>Profile
                    </h3>
                    <div className="block-options">
                        <button type="button" className="btn-block-option" data-toggle="block-option" data-action="content_toggle"></button>
                    </div>
                </div>
                <div className="block-content">
                    <form action="be_pages_dashboard.html" method="post" onSubmit="return false;">
                        <div className="form-group mb-15">
                            <label htmlFor="side-overlay-profile-name">Name</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="side-overlay-profile-name" name="side-overlay-profile-name" placeholder="Your name.." value="John Smith"/>
                                <div className="input-group-append">
                                    <span className="input-group-text">
                                        <i className="fa fa-user"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group mb-15">
                            <label htmlFor="side-overlay-profile-email">Email</label>
                            <div className="input-group">
                                <input type="email" className="form-control" id="side-overlay-profile-email" name="side-overlay-profile-email" placeholder="Your email.." value="john.smith@example.com"/>
                                <div className="input-group-append">
                                    <span className="input-group-text">
                                        <i className="fa fa-envelope"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group mb-15">
                            <label htmlFor="side-overlay-profile-password">New Password</label>
                            <div className="input-group">
                                <input type="password" className="form-control" id="side-overlay-profile-password" name="side-overlay-profile-password" placeholder="New Password.."/>
                                <div className="input-group-append">
                                    <span className="input-group-text">
                                        <i className="fa fa-asterisk"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group mb-15">
                            <label htmlFor="side-overlay-profile-password-confirm">Confirm New Password</label>
                            <div className="input-group">
                                <input type="password" className="form-control" id="side-overlay-profile-password-confirm" name="side-overlay-profile-password-confirm" placeholder="Confirm New Password.."/>
                                <div className="input-group-append">
                                    <span className="input-group-text">
                                        <i className="fa fa-asterisk"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-6">
                                <button type="submit" className="btn btn-block btn-alt-primary">
                                    <i className="fa fa-refresh mr-5"></i> Update
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* <!-- END Profile --> */}

            {/* <!-- Settings --> */}
            <div className="block pull-r-l">
                <div className="block-header bg-body-light">
                    <h3 className="block-title">
                        <i className="fa fa-fw fa-wrench font-size-default mr-5"></i>Settings
                    </h3>
                    <div className="block-options">
                        <button type="button" className="btn-block-option" data-toggle="block-option" data-action="content_toggle"></button>
                    </div>
                </div>
                <div className="block-content">
                    <div className="row gutters-tiny">
                        <div className="col-6">
                            <div className="custom-control custom-checkbox mb-5">
                                <input type="checkbox" className="custom-control-input" id="side-overlay-settings-status" name="side-overlay-settings-status" value="1" checked/>
                                <label className="custom-control-label" htmlFor="side-overlay-settings-status">Online Status</label>
                            </div>
                            <div className="custom-control custom-checkbox mb-5">
                                <input type="checkbox" className="custom-control-input" id="side-overlay-settings-public-profile" name="side-overlay-settings-public-profile" value="1"/>
                                <label className="custom-control-label" htmlFor="side-overlay-settings-public-profile">Public Profile</label>
                            </div>
                            <div className="custom-control custom-checkbox mb-5">
                                <input type="checkbox" className="custom-control-input" id="side-overlay-settings-notifications" name="side-overlay-settings-notifications" value="1" checked/>
                                <label className="custom-control-label" htmlFor="side-overlay-settings-notifications">Notifications</label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="custom-control custom-checkbox mb-5">
                                <input type="checkbox" className="custom-control-input" id="side-overlay-settings-updates" name="side-overlay-settings-updates" value="1"/>
                                <label className="custom-control-label" htmlFor="side-overlay-settings-updates">Auto updates</label>
                            </div>
                            <div className="custom-control custom-checkbox mb-5">
                                <input type="checkbox" className="custom-control-input" id="side-overlay-settings-api-access" name="side-overlay-settings-api-access" value="1" checked/>
                                <label className="custom-control-label" htmlFor="side-overlay-settings-api-access">API Access</label>
                            </div>
                            <div className="custom-control custom-checkbox mb-5">
                                <input type="checkbox" className="custom-control-input" id="side-overlay-settings-limit-requests" name="side-overlay-settings-limit-requests" value="1"/>
                                <label className="custom-control-label" htmlFor="side-overlay-settings-limit-requests">API Requests</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- END Settings --> */}
        </div>
        {/* <!-- END Side Content --> */}
    </aside>
    {/* <!-- END Side Overlay --> */}

    {/* <!-- Sidebar --> */}

    <nav id="sidebar">
        {/* <!-- Sidebar Content --> */}
        <div className="sidebar-content">
            {/* <!-- Side Header --> */}
            <div className="content-header content-header-fullrow px-15">
                {/* <!-- Mini Mode --> */}
                <div className="content-header-section sidebar-mini-visible-b">
                    {/* <!-- Logo --> */}
                    <span className="content-header-item font-w700 font-size-xl float-left animated fadeIn">
                        <span className="text-dual-primary-dark">c</span><span className="text-primary">b</span>
                    </span>
                    {/* <!-- END Logo --> */}
                </div>
                {/* <!-- END Mini Mode --> */}

                {/* <!-- Normal Mode --> */}
                <div className="content-header-section text-center align-parent sidebar-mini-hidden">
                    {/* <!-- Close Sidebar, Visible only on mobile screens --> */}
                    {/* <!-- Layout API, functionality initialized in Template._uiApiLayout() --> */}
                    <button type="button" className="btn btn-circle btn-dual-secondary d-lg-none align-v-r" data-toggle="layout" data-action="sidebar_close">
                        <i className="fa fa-times text-danger"></i>
                    </button>
                    {/* <!-- END Close Sidebar --> */}

                    {/* <!-- Logo --> */}
                    <div className="content-header-item">
                        <a className="link-effect font-w700" href="index.html">
                            <i className="fa fa-institution text-primary font-size-xl"></i> &nbsp;&nbsp;
                            <span className="font-size-xl text-dual-primary-dark">ICB</span><span className="font-size-xl text-primary">IMS</span>
                        </a>
                    </div>
                    {/* <!-- END Logo --> */}
                </div>
                {/* <!-- END Normal Mode --> */}
            </div>
            {/* <!-- END Side Header --> */}

            {/* <!-- Side User --> */}
            <div className="content-side content-side-full content-side-user px-10 align-parent">
                {/* <!-- Visible only in mini mode --> */}
                <div className="sidebar-mini-visible-b align-v animated fadeIn">
                    <img className="img-avatar img-avatar32" src={user.profile_photo_url} alt=""/>
                </div>
                {/* <!-- END Visible only in mini mode --> */}

                {/* <!-- Visible only in normal mode --> */}
                <div className="sidebar-mini-hidden-b text-center">
                    <a className="img-link" href="be_pages_generic_profile.html">
                        <img className="img-avatar" src={user.profile_photo_url} alt=""/>
                    </a>
                    <ul className="list-inline mt-10">
                        <li className="list-inline-item">
                            <a className="link-effect text-dual-primary-dark font-size-sm font-w600 text-uppercase" href="be_pages_generic_profile.html">{user.name}</a>
                        </li>
                        <li className="list-inline-item">
                            {/* <!-- Layout API, functionality initialized in Template._uiApiLayout() --> */}
                            <a className="link-effect text-dual-primary-dark" data-toggle="layout" data-action="sidebar_style_inverse_toggle" href="javascript:void(0)">
                                <i className="si si-drop"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="link-effect text-dual-primary-dark" href="op_auth_signin.html">
                                <i className="si si-logout"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* <!-- END Visible only in normal mode --> */}
            </div>
            {/* <!-- END Side User --> */}

            {/* <!-- Side Navigation --> */}
            <div className="content-side content-side-full">
               <MainMenu/>
            </div>
            {/* <!-- END Side Navigation --> */}
        </div>
        {/* <!-- Sidebar Content --> */}
    </nav>
    {/* <!-- END Sidebar --> */}

    {/* <!-- Header --> */}
    <header id="page-header">
        {/* <!-- Header Content --> */}
        <div className="content-header">
            {/* <!-- Left Section --> */}
            <div className="content-header-section">
                {/* <!-- Toggle Sidebar --> */}
                {/* <!-- Layout API, functionality initialized in Template._uiApiLayout() --> */}
                <button type="button" className="btn btn-circle btn-dual-secondary" data-toggle="layout" data-action="sidebar_toggle">
                    <i className="fa fa-navicon"></i>
                </button>
                {/* <!-- END Toggle Sidebar --> */}

                {/* <!-- Open Search Section --> */}
                {/* <!-- Layout API, functionality initialized in Template._uiApiLayout() --> */}
                <button type="button" className="btn btn-circle btn-dual-secondary" data-toggle="layout" data-action="header_search_on">
                    <i className="fa fa-search"></i>
                </button>
                {/* <!-- END Open Search Section --> */}

                {/* <!-- Layout Options (used just for demonstration) --> */}
                {/* <!-- Layout API, functionality initialized in Template._uiApiLayout() --> */}
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-circle btn-dual-secondary" id="page-header-options-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-wrench"></i>
                    </button>
                    <div className="dropdown-menu min-width-300" aria-labelledby="page-header-options-dropdown">
                        <h5 className="h6 text-center py-10 mb-10 border-b text-uppercase">Settings</h5>
                        <h6 className="dropdown-header">Color Themes</h6>
                        <div className="row no-gutters text-center mb-5">
                            <div className="col-2 mb-5">
                                <a className="text-default" data-toggle="theme" data-theme="default" href="javascript:void(0)">
                                    <i className="fa fa-2x fa-circle"></i>
                                </a>
                            </div>
                            <div className="col-2 mb-5">
                                <a className="text-elegance" data-toggle="theme" data-theme="assets/css/themes/elegance.min.css" href="javascript:void(0)">
                                    <i className="fa fa-2x fa-circle"></i>
                                </a>
                            </div>
                            <div className="col-2 mb-5">
                                <a className="text-pulse" data-toggle="theme" data-theme="assets/css/themes/pulse.min.css" href="javascript:void(0)">
                                    <i className="fa fa-2x fa-circle"></i>
                                </a>
                            </div>
                            <div className="col-2 mb-5">
                                <a className="text-flat" data-toggle="theme" data-theme="assets/css/themes/flat.min.css" href="javascript:void(0)">
                                    <i className="fa fa-2x fa-circle"></i>
                                </a>
                            </div>
                            <div className="col-2 mb-5">
                                <a className="text-corporate" data-toggle="theme" data-theme="assets/css/themes/corporate.min.css" href="javascript:void(0)">
                                    <i className="fa fa-2x fa-circle"></i>
                                </a>
                            </div>
                            <div className="col-2 mb-5">
                                <a className="text-earth" data-toggle="theme" data-theme="assets/css/themes/earth.min.css" href="javascript:void(0)">
                                    <i className="fa fa-2x fa-circle"></i>
                                </a>
                            </div>
                        </div>
                        <h6 className="dropdown-header">Header</h6>
                        <div className="row gutters-tiny text-center mb-5">
                            <div className="col-6">
                                <button type="button" className="btn btn-sm btn-block btn-alt-secondary" data-toggle="layout" data-action="header_fixed_toggle">Fixed Mode</button>
                            </div>
                            <div className="col-6">
                                <button type="button" className="btn btn-sm btn-block btn-alt-secondary d-none d-lg-block mb-10" data-toggle="layout" data-action="header_style_classic">Classic Style</button>
                            </div>
                        </div>
                        <h6 className="dropdown-header">Sidebar</h6>
                        <div className="row gutters-tiny text-center mb-5">
                            <div className="col-6">
                                <button type="button" className="btn btn-sm btn-block btn-alt-secondary mb-10" data-toggle="layout" data-action="sidebar_style_inverse_off">Light</button>
                            </div>
                            <div className="col-6">
                                <button type="button" className="btn btn-sm btn-block btn-alt-secondary mb-10" data-toggle="layout" data-action="sidebar_style_inverse_on">Dark</button>
                            </div>
                        </div>
                        <div className="d-none d-xl-block">
                            <h6 className="dropdown-header">Main Content</h6>
                            <button type="button" className="btn btn-sm btn-block btn-alt-secondary mb-10" data-toggle="layout" data-action="content_layout_toggle">Toggle Layout</button>
                        </div>
                        <div className="dropdown-divider"></div>
                        <div className="row gutters-tiny text-center">
                            <div className="col-6">
                                <a className="dropdown-item mb-0" href="be_layout_api.html">
                                    <i className="si si-chemistry mr-5"></i> Layout API
                                </a>
                            </div>
                            <div className="col-6">
                                <a className="dropdown-item mb-0" href="be_ui_color_themes.html">
                                    <i className="fa fa-paint-brush mr-5"></i> Color Themes
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- END Layout Options --> */}
            </div>
            {/* <!-- END Left Section --> */}

            {/* <!-- Right Section --> */}
            <div className="content-header-section">
                {/* <!-- User Dropdown --> */}
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-rounded btn-dual-secondary" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-user d-sm-none"></i>
                        <span className="d-none d-sm-inline-block">{user.name}</span>
                        <i className="fa fa-angle-down ml-5"></i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right min-width-200" aria-labelledby="page-header-user-dropdown">
                        <h5 className="h6 text-center py-10 mb-5 border-b text-uppercase">User</h5>
                        <a className="dropdown-item" href="be_pages_generic_profile.html">
                            <i className="si si-user mr-5"></i> Profile
                        </a>
                        <a className="dropdown-item d-flex align-items-center justify-content-between" href="be_pages_generic_inbox.html">
                            <span><i className="si si-envelope-open mr-5"></i> Inbox</span>
                            <span className="badge badge-primary">3</span>
                        </a>
                        <a className="dropdown-item" href="be_pages_generic_invoice.html">
                            <i className="si si-note mr-5"></i> Invoices
                        </a>
                        <div className="dropdown-divider"></div>

                        {/* <!-- Toggle Side Overlay --> */}
                        {/* <!-- Layout API, functionality initialized in Template._uiApiLayout() --> */}
                        <a className="dropdown-item" href="javascript:void(0)" data-toggle="layout" data-action="side_overlay_toggle">
                            <i className="si si-wrench mr-5"></i> Settings
                        </a>
                        {/* <!-- END Side Overlay --> */}

                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="op_auth_signin.html">
                            <i className="si si-logout mr-5"></i> Sign Out
                        </a>
                    </div>
                </div>
                {/* <!-- END User Dropdown --> */}

                {/* <!-- Notifications --> */}
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-rounded btn-dual-secondary" id="page-header-notifications" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-flag"></i>
                        <span className="badge badge-primary badge-pill">5</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right min-width-300" aria-labelledby="page-header-notifications">
                        <h5 className="h6 text-center py-10 mb-0 border-b text-uppercase">Notifications</h5>
                        <ul className="list-unstyled my-20">
                            <li>
                                <a className="text-body-color-dark media mb-15" href="javascript:void(0)">
                                    <div className="ml-5 mr-15">
                                        <i className="fa fa-fw fa-check text-success"></i>
                                    </div>
                                    <div className="media-body pr-10">
                                        <p className="mb-0">You’ve upgraded to a VIP account successfully!</p>
                                        <div className="text-muted font-size-sm font-italic">15 min ago</div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="text-body-color-dark media mb-15" href="javascript:void(0)">
                                    <div className="ml-5 mr-15">
                                        <i className="fa fa-fw fa-exclamation-triangle text-warning"></i>
                                    </div>
                                    <div className="media-body pr-10">
                                        <p className="mb-0">Please check your payment info since we can’t validate them!</p>
                                        <div className="text-muted font-size-sm font-italic">50 min ago</div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="text-body-color-dark media mb-15" href="javascript:void(0)">
                                    <div className="ml-5 mr-15">
                                        <i className="fa fa-fw fa-times text-danger"></i>
                                    </div>
                                    <div className="media-body pr-10">
                                        <p className="mb-0">Web server stopped responding and it was automatically restarted!</p>
                                        <div className="text-muted font-size-sm font-italic">4 hours ago</div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="text-body-color-dark media mb-15" href="javascript:void(0)">
                                    <div className="ml-5 mr-15">
                                        <i className="fa fa-fw fa-exclamation-triangle text-warning"></i>
                                    </div>
                                    <div className="media-body pr-10">
                                        <p className="mb-0">Please consider upgrading your plan. You are running out of space.</p>
                                        <div className="text-muted font-size-sm font-italic">16 hours ago</div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="text-body-color-dark media mb-15" href="javascript:void(0)">
                                    <div className="ml-5 mr-15">
                                        <i className="fa fa-fw fa-plus text-primary"></i>
                                    </div>
                                    <div className="media-body pr-10">
                                        <p className="mb-0">New purchases! +$250</p>
                                        <div className="text-muted font-size-sm font-italic">1 day ago</div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item text-center mb-0" href="javascript:void(0)">
                            <i className="fa fa-flag mr-5"></i> View All
                        </a>
                    </div>
                </div>
                {/* <!-- END Notifications --> */}

               {/*  <!-- Toggle Side Overlay -->
                <!-- Layout API, functionality initialized in Template._uiApiLayout() --> */}
                <button type="button" className="btn btn-circle btn-dual-secondary" data-toggle="layout" data-action="side_overlay_toggle">
                    <i className="fa fa-tasks"></i>
                </button>
                {/* <!-- END Toggle Side Overlay --> */}
            </div>
            {/* <!-- END Right Section --> */}
        </div>
        {/* <!-- END Header Content --> */}

        {/* <!-- Header Search --> */}
        <div id="page-header-search" className="overlay-header">
            <div className="content-header content-header-fullrow">
                <form action="be_pages_generic_search.html" method="post">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            {/* <!-- Close Search Section -->
                            <!-- Layout API, functionality initialized in Template._uiApiLayout() --> */}
                            <button type="button" className="btn btn-secondary" data-toggle="layout" data-action="header_search_off">
                                <i className="fa fa-times"></i>
                            </button>
                            {/* <!-- END Close Search Section --> */}
                        </div>
                        <input type="text" className="form-control" placeholder="Search or hit ESC.." id="page-header-search-input" name="page-header-search-input"/>
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-secondary">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        {/* <!-- END Header Search --> */}

        {/* <!-- Header Loader -->
        <!-- Please check out the Activity page under Elements category to see examples of showing/hiding it --> */}
        <div id="page-header-loader" className="overlay-header bg-primary">
            <div className="content-header content-header-fullrow text-center">
                <div className="content-header-item">
                    <i className="fa fa-sun-o fa-spin text-white"></i>
                </div>
            </div>
        </div>
        {/* <!-- END Header Loader --> */}
    </header>
    {/* <!-- END Header --> */}

    {/* <!-- Main Container --> */}
    <main id="main-container">
        {/* <!-- Page Content --> */}
        <div className="content">
           {children}
        </div>
        {/* <!-- END Page Content --> */}
    </main>
    {/* <!-- END Main Container --> */}
        <FlashMessages/>
    {/* <!-- Footer --> */}
    <footer id="page-footer" className="opacity-0">
        <div className="content py-20 font-size-sm clearfix">
            <div className="float-right">
                Crafted with <i className="fa fa-heart text-pulse"></i> by <a className="font-w600" href="#" >Mungu Na Wahuni</a>
            </div>
            <div className="float-left">
                <a className="font-w600" href="#" >ICBIMS v 0.1</a> &copy; <span className="js-year-copy"></span>
            </div>
        </div>
    </footer>
    {/* <!-- END Footer --> */}
</div>

  );
}
