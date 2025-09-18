import React from 'react';


export default function HowWeWork() {
const steps = [
{ title: 'Discover', desc: 'Understand your idea, market & goals' },
{ title: 'Research', desc: 'Analyze competition & user needs' },
{ title: 'Design', desc: 'Build wireframes, templates, and brand visuals' },
{ title: 'Develop', desc: 'Create the website, app, or platform' },
{ title: 'Promote', desc: 'Launch with ads, social media, and product videos' },
{ title: 'Optimize', desc: 'Scale with analytics & feedback' },
];


return (
<section className="vx-process">
<div className="vx-container">
<h2 className="vx-section-title">How We Work</h2>


<div className="vx-steps">
{steps.map((s, i) => (
<div className="vx-step" key={s.title}>
<div className="vx-step-num">{i + 1}</div>
<div className="vx-step-body">
<div className="vx-step-title">{s.title} – <span className="vx-step-desc">{s.desc}</span></div>
</div>
</div>
))}
</div>


</div>
</section>
);
}