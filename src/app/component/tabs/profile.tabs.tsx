import React, { useState } from 'react';

const AccountsTabs = () => {
    const [activeTab, setActiveTab] = useState('collection');

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };

    return (
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <div className='mx-auto w-full max-w-[2560px] px-4 sm:px-8 xl:px-16'>
                <nav className='w-full'>
                    <div className='flex justify-between duration-[250ms] items-end py-4 transition-all lg:py-6 pb-3'>
                        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center p-0 w-full m-0" id="default-tab" role="tablist">
                            <div className='flex m-0 -ml-2 gap-2'>
                            <li className="me-2 relative list-none" role="presentation">
                                <button
                                    className={`inline-block p-4 rounded-t-lg text-lg font-bold ${activeTab === 'collection' ? 'text-sky-400' : 'text-sky-50'}`}
                                    onClick={() => handleTabClick('collection')}
                                    role="tab"
                                    aria-controls="profile"
                                    aria-selected={activeTab === 'collection'}
                                >
                                    Collection
                                </button>
                            </li>
                            <li className="me-2" role="presentation">
                                <button
                                    className={`inline-block p-4 rounded-t-lg text-lg font-bold ${activeTab === 'created' ? 'text-sky-400' : 'text-sky-50'}`}
                                    onClick={() => handleTabClick('created')}
                                    role="tab"
                                    aria-controls="dashboard"
                                    aria-selected={activeTab === 'created'}
                                >
                                    Created
                                </button>
                            </li>
                            <li className="me-2" role="presentation">
                                <button
                                    className={`inline-block p-4 rounded-t-lg text-lg font-bold ${activeTab === 'favorited' ? 'text-sky-400' : 'text-sky-50'}`}
                                    onClick={() => handleTabClick('favorited')}
                                    role="tab"
                                    aria-controls="favorited"
                                    aria-selected={activeTab === 'favorited'}
                                >
                                    Favorited
                                </button>
                            </li>
                            <li role="presentation">
                                <button
                                    className={`inline-block p-4 rounded-t-lg text-lg font-bold ${activeTab === 'activity' ? 'text-sky-400' : 'text-sky-50'}`}
                                    onClick={() => handleTabClick('activity')}
                                    role="tab"
                                    aria-controls="activity"
                                    aria-selected={activeTab === 'activity'}
                                >
                                    Activity
                                </button>
                            </li>
                            </div>
                        </ul>
                    </div>
                </nav>
            </div>
            <div id="default-tab-content" className='flex w-full pt-0 lg:pt-6'>
                <div>

                </div>
                <div
                    className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === 'collection' ? 'block' : 'hidden'}`}
                    role="tabpanel"
                >
                   No items found 
                </div>
                <div
                    className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === 'created' ? 'block' : 'hidden'}`}
                    role="tabpanel"
                >
                    No items found 
                </div>
                <div
                    className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === 'favorited' ? 'block' : 'hidden'}`}
                    role="tabpanel"
                >
                    No items found 
                </div>
                <div
                    className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === 'activity' ? 'block' : 'hidden'}`}
                    role="tabpanel"
                >
                   No items found 
                </div>
            </div>
        </div>
    );
};

export default AccountsTabs;
