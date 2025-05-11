import React from "react";
interface FeatureProps {
    className?: string;
}

export default function Feature({ className }: FeatureProps) {
    return (
        <div className={className}>
            <div className="feature-content">
                <h2>Feature Title</h2>
                <p>This is a feature description.</p>
                <a href="/feature" className="btn btn-secondary">Learn More</a>
            </div>
        </div>
    );
}