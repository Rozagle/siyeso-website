// eslint-disable-next-line no-unused-vars
import React from 'react';
import Lottie from 'lottie-react';
import { useTranslation } from 'react-i18next';
import analysis from '../assets/analysis.json';
import './Analysis.css';
function Analysis() {
    const { t } = useTranslation();

    return (
        <div className='analysis-container'>
            <div className='max-width-container'>
                <Lottie className='lottie-animation' animationData={analysis} />
                <div className='text-container'>
                    <p className='title'>
                        {t('analysis-container.heading')}
                    </p>
                    <h1 className='heading'>
                        {t('analysis-container.h1')}
                    </h1>
                    <p className='description'>
                        {t('analysis-container.description')}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Analysis;

