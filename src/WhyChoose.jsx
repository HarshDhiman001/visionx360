import React from 'react';


export default function WhyChoose() {
const points = [
'We build products + marketing under one roof',
'End-to-end service: Research → Design → Develop → Promote',
'AI-powered insights for faster results',
'Creative, affordable, and startup-friendly',
'Real focus on ROI & growth',
];


return (
<section className="vx-why">
<div className="vx-container">
<h2 className="vx-section-title">Why Clients Choose VisionX360</h2>
<ul className="vx-why-list">
{points.map((p, i) => (
<li key={i}>✅ {p}</li>
))}
</ul>
</div>
</section>
);
}