import styled from "styled-components";

const BBusca = styled.div`
    .divContainer {

        display: flex;
        justify-content: center;
        filter: drop-shadow(0 0 0.75rem var(--primaria));
        padding: 1.5em 1.3em;
        border-radius: .9em;
        background-color: var(--background);
        margin-bottom: 30px;
    }

    .search {
        position: relative;
        padding: 1.2rem;
        padding-left: 1.5rem;
        width: 100%;
        max-width: 40rem;
        color: var(--primaria);
        border-radius: .9em;
        font-weight: 600;
        border: 1px solid grey;
        text-align: left;

        &:focus {
            outline: 2px solid var(--primaria);
            background-color: var(--background);
        }
    }
`;

export { BBusca };
