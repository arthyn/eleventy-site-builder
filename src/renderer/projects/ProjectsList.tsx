import React from 'react'
import { Project } from './models/project'

interface ProjectsListProps {
    projects: Project[];
}

export function ProjectsList({ projects }: ProjectsListProps) {
    return (
        <ul className="relative h-full overflow-y-auto list-none">
            {projects.map(project => (
                <li key={project.directory} className="mb-4 leading-tight">
                    <strong className="block">{ project.name }</strong>
                    <span>{ project.description }</span>
                </li>
            ))}
            <div className="fixed bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-gray-800"></div>
        </ul>
    )
}