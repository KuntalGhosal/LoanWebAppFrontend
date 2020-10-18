import React from 'react'

export default function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column 1 */}
                    <div className="col-md-3 col-sm-6">
                        {/* footer-bottom */}
                        <div className="footer-bottom">
                            <p>
                                &copy;{new Date().getFullYear()} Instant Loan App - All Rights
                           </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

