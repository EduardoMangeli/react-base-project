import React, { useState, useEffect } from "react";
import Card from "../ProjectCard/ProjectCard";
import BarradeBusca from "../BarradeBusca/BarradeBusca";
import { Personalizacao } from "./Style";

function Projects() {
    const [projects, setProjects] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    useEffect(() => {
        const data = require("../../data/projects.json"); 
        setProjects(data); 
    }, []);

    const filteredProjects = projects.filter((item) => {
        const titleMatch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
        const membersMatch = item.members.toLowerCase().includes(searchTerm.toLowerCase());
        return titleMatch || membersMatch;
}); 

    return (
        <>
            <BarradeBusca onSearch={handleSearch} />
            <Personalizacao>
                {filteredProjects.map((item) => (
                    <Card
                        key={item.id}
                        title={item.title}
                        text={item.text}
                        tech={item.tech}
                        image={item.image}
                        button="Saiba Mais"
                        id={item.id}
                    />
                ))}
            </Personalizacao>
        </>
    );
}

export default Projects;
