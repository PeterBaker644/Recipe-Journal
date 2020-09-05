import React from "react";
import PrivacyPolicyText from "../../component/PrivacyPolicy/PrivacyPolicyText"
import TestCard from "../../component/TestCard"

function PrivacyPolicy() {
    return (
        <div className="container">
            <TestCard>
                <PrivacyPolicyText/>
            </TestCard>
        </div>
    )
}

export default PrivacyPolicy;
