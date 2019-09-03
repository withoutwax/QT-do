import React from 'react';
import PackageJson from '../../package.json';

function Footer() {
    return(
        <footer>
            <p>version v{PackageJson.version}</p>
        </footer>
    )
}

export default Footer;