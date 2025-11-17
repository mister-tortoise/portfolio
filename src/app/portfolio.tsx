'use client';

import React, { Suspense } from 'react';

import {
    AboutSection,
    AnimatedGradientBackground,
    ContactSection,
    ExperienceSection,
    HeroSection,
    ProjectSection,
    ScrollToTop,
    SkillSection
} from '@/components';

export function Portfolio() {
    return (
        <div className='bg-background min-h-screen'>
            <Suspense fallback={<div className='bg-background fixed inset-0' />}>
                <AnimatedGradientBackground />
            </Suspense>
            <ScrollToTop />
            <HeroSection />
            <AboutSection />
            <SkillSection />
            <ProjectSection />
            <ExperienceSection />
            <ContactSection />
        </div>
    );
}
