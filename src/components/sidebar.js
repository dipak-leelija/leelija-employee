import React from "react";
// import { logo } from "../../public/logo192.png";
const Sidebar = () => {
    return (
<div className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 "
    id="sidenav-main">
    <div className="sidenav-header">
        <a className="navbar-brand m-0" href="/" target="_blank">
            <img src="" alt="logo" className="pe-md-4"/>
        </a>
    </div>
    <hr className="horizontal dark mt-0"/>
    <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
        <ul className="navbar-nav">
            <li className="nav-item ">
                <a className="nav-link <?= $page == 'Admin_dashboard' ? 'active' : ''; ?>" href="index.php">
                    <div
                        className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                        <i className="fa fa-home" aria-hidden="true"></i>
                    </div>
                    <span className="nav-link-text ms-1">Dashboard</span>
                </a>
            </li>

            <li className="nav-item has-submenu">
                <a className="nav-link  submenu-toggle "
                    href="#" data-bs-toggle="collapse" data-bs-target="#submenu-1" aria-expanded="" aria-controls="submenu-1">
                    <div
                        className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                        <i className="fa-solid fa-users-line"></i>
                    </div>
                    <span className="nav-link-text ms-1">Employees Section</span>
                </a>
                <div id="submenu-1"
                    className="collapse submenu submenu-1 "
                    data-bs-parent="#menu-accordion">
                    <ul className="submenu-list list-unstyled">
                        <li className="submenu-item">
                            <a className="submenu-link "
                                href="add-employees.php">Add New Employee</a>
                        </li>
                        <li className="submenu-item">
                            <a className="submenu-link"
                                href="employees-details.php">Employee Details</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="nav-item has-submenu">
                <a className="nav-link  submenu-toggle"
                    href="my-guest-post.php" data-bs-toggle="collapse" data-bs-target="#submenu-2"
                    aria-expanded=""
                    aria-controls="submenu-2">
                    <div
                        className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                        <i className="fa-solid fa-message"></i>
                    </div>
                    <span className="nav-link-text ms-1">Contact Management</span>
                </a>
                <div id="submenu-2"
                    className="collapse submenu submenu-2"
                    data-bs-parent="#menu-accordion">
                    <ul className="submenu-list list-unstyled">
                        <li className="submenu-item"><a
                                className="submenu-link"
                                href="contact-details.php">Contact Details</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="nav-item has-submenu">
                <a className="nav-link  submenu-toggle"
                    href="my-guest-post.php" data-bs-toggle="collapse" data-bs-target="#submenu-3"
                    aria-expanded=""
                    aria-controls="submenu-3">
                    <div
                        className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                        <i className="fas fa-cart-arrow-down"></i>
                    </div>
                    <span className="nav-link-text ms-1">Markerting Tools</span>
                </a>
                <div id="submenu-3"
                    className="collapse submenu submenu-3"
                    data-bs-parent="#menu-accordion">
                    <ul className="submenu-list list-unstyled">
                        <li className="submenu-item"><a
                                className="submenu-link"
                                href="email-group.php">E-mail Group</a></li>
                    </ul>
                </div>
            </li>
            <li className="nav-item has-submenu">
                <a className="nav-link  submenu-toggle"
                    href="my-guest-post.php" data-bs-toggle="collapse" data-bs-target="#submenu-4"
                    aria-expanded="" aria-controls="submenu-4">
                    <div
                        className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                        <i className="fa-solid fa-gears"></i>
                    </div>
                    <span className="nav-link-text ms-1">Setup Tools</span>
                </a>
                <div id="submenu-4"
                    className="collapse submenu submenu-4"
                    data-bs-parent="#menu-accordion">
                    <ul className="submenu-list list-unstyled">
                        <li className="submenu-item"><a
                                className="submenu-link"
                                href="admin-user.php">Admin Users</a></li>
                        <li className="submenu-item"><a
                                className="submenu-link"
                                href="database-backup.php">Database Backup</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="nav-item has-submenu">
                <a className="nav-link  submenu-toggle"
                    href="#" data-bs-toggle="collapse" data-bs-target="#submenu-5" aria-expanded="" aria-controls="submenu-5">
                    <div
                        className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                        <i className="fa-solid fa-user-pen"></i>
                    </div>
                    <span className="nav-link-text ms-1">User Management</span>
                </a>
                <div id="submenu-5"
                    className="collapse submenu submenu-"
                    data-bs-parent="#menu-accordion">
                    <ul className="submenu-list list-unstyled">
                        <li className="submenu-item">
                            <a className="submenu-link"
                                href="customer.php">Customer</a>
                        </li>
                        <li className="submenu-item">
                            <a className="submenu-link"
                                href="customer-type.php">Customer Type</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="nav-item has-submenu">
                <a className="nav-link  submenu-toggle"
                    href="#" data-bs-toggle="collapse" data-bs-target="#submenu-6" aria-expanded="" aria-controls="submenu-6">
                    <div
                        className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                        <i className="fa-solid fa-user-graduate"></i>
                    </div>
                    <span className="nav-link-text ms-1">Careers</span>
                </a>
                <div id="submenu-6"
                    className="collapse submenu submenu-6"
                    data-bs-parent="#menu-accordion">
                    <ul className="submenu-list list-unstyled">
                        <li className="submenu-item">
                            <a className="submenu-link"
                                href="careers-applicaion.php">Application</a>
                        </li>
                        <li className="submenu-item">
                            <a className="submenu-link"
                                href="add-new-vacancy.php">Add New Vacancy</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link <?= $page == 'Admin_tables' ? 'active' : ''; ?>" href="tables.php">
                    <div
                        className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                        <i className="fa-solid fa-table"></i>
                    </div>
                    <span className="nav-link-text ms-1">Tables</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link  <?= $page == 'Admin_billing' ? 'active' : ''; ?>" href="billing.php">
                    <div
                        className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                        <i className="fa-solid fa-file-invoice-dollar"></i>
                    </div>
                    <span className="nav-link-text ms-1">Billing</span>
                </a>
            </li>
            <li className="nav-item mt-3">
                <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Account pages</h6>
            </li>
            <li className="nav-item">
                <a className="nav-link  <?= $page == 'Admin_profile' ? 'active' : ''; ?>" href="profile.php">
                    <div
                        className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                        <i className="fa-solid fa-users"></i>
                    </div>
                    <span className="nav-link-text ms-1">Profile</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link  <?= $page == 'Admin_signin' ? 'active' : ''; ?>" href="sign-in.php">
                    <div
                        className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                        <i className="fa-solid fa-right-to-bracket"></i>
                    </div>
                    <span className="nav-link-text ms-1">Sign In</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link  <?= $page == 'Admin_signup' ? 'active' : ''; ?>" href="sign-up.php">
                    <div
                        className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                        <i className="fa-solid fa-user-plus"></i>
                    </div>
                    <span className="nav-link-text ms-1">Sign Up</span>
                </a>
            </li>
        </ul>
    </div>
</div>
);
};

export default Sidebar;