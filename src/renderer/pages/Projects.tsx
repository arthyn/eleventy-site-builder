import React from 'react'
import { ProjectsList } from '../projects/ProjectsList'
import { Layout } from '../shared/Layout'
import { useQuery } from 'react-query'
import { send } from '../client/ipc';
import { Spinner } from '../shared/Spinner';

export function Projects() {
    const { data: projects, isIdle, isLoading, isSuccess } = useQuery('projects', () => send('get-projects'))

    return (
        <Layout title="Projects" className="content-area-height">
            <section className="flex flex-col items-center justify-center h-full max-w-md mx-auto p-6 space-y-9 text-purple-300">
                {isIdle || isLoading && 
                    <Spinner />
                }
                {isSuccess && <ProjectsList projects={projects} />}
            </section>
        </Layout>
    )
}