import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetalhamentoContainer } from "./Style";

const PersoDetalhes = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        const data = require("../../data/projects.json");
        const selectedProject = data.find((item) => item.id === parseInt(id));
        setProject(selectedProject);
    }, [id]);

    if (!project) {
        return <p>Projeto não encontrado.</p>;
    }

    return (
        <DetalhamentoContainer>
            <div>
                <h1>{project.title}</h1>
                <img src={project.image} alt={`Imagem do projeto ${project.title}`} />
                <p><strong>Tecnologias:</strong> {project.tech}</p>
                <p><strong>Descrição:</strong> {project.description}</p>
                <p><strong>Data:</strong> {project.date}</p>
                <p><strong>Alunos:</strong> {project.members}</p>
                <p><strong>ID:{id}</strong></p>
            </div>
        </DetalhamentoContainer>
    );
};

export default PersoDetalhes;
