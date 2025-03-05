import React from 'react';
import { Nunito } from "next/font/google";
import clsx from "clsx";

const nunito = Nunito({
    variable: '--font-nunito',
    subsets: ['latin'],
});

export default function Pricing() {

    const pricing = [
        {id: 1, title: 'Starter', description: "Get a few features to start your Adgen-ai journey.", price: "Free", features: ['5 ads per month', 'Watermarked exports', 'Limited selection of templates', 'Standard resolution only (720p)']},

        {id: 2, title: 'Basic', description: "Get full usage of the generator ", price: '$30', features: ['Unlimited generated ads', 'No Watermarked exports', 'Access to premium templates', 'Exports in HD quality (1080p)']},

        {id: 3, title: 'Teams', description: "A full package for a 3-4 membered team", price: '$50', features: ['Unlimited generated ads', 'Share with team members', 'Team brand kit integration', '4K resolution & custom export options']},
    ];

    return (
        <div className={clsx("w-full py-16 px-4 md:px-6 lg:px-8 relative overflow-hidden", nunito.variable)}>
            <div className='max-w-7xl mx-auto text-center space-y-5'>

                <div className='space-y-5'>
                    <h3 className='text-[#B800B8] font-bold'>UNLOCK THE FULL POTENTIAL OF AI-ADGEN</h3>
                    <h1 className='text-3xl font-semibold'>Pricing Plans</h1>
                    <p>Generate your ads for free and pay as you grow</p>
                </div>

                {/* Card */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 text-start mt-5'>
                    {pricing.map((plan, index) => (
                        <div key={plan.id} className={clsx('p-5 rounded-2xl w-[381px] h-[539px] flex flex-col justify-between', {
                            'bg-[#B800B8] text-white': index === 1,
                            'bg-white text-black': index !== 1
                        })}>
                            <div className='space-y-5'>
                                <div>
                                    <h2 className={clsx('text-2xl font-semibold', {'text-white' : index === 1,
                                        'text-[#B800B8]' : index !== 1,
                                     })}>{plan.title}</h2>
                                    <p>{plan.description}</p>
                                </div>
                                <h3 className={clsx('border-b-[0.5px] pb-3 text-2xl font-semibold', {
                                    'border-white': index === 1,
                                    'border-gray-300 text-[#B800B8]': index !== 1
                                })}>{plan.price}</h3>
                                <ul className='space-y-2'>
                                    {plan.features.map((feature, index) => (
                                        <li key={index}>✓ {feature}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='flex justify-center'>
                                <button className={clsx('p-3 rounded-lg ', {
                                    'bg-white text-[#B800B8]': index === 1,
                                    'bg-[#B800B8] text-white': index !== 1
                                })}>Choose plan</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
