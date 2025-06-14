import { useState } from "react";
import styled from "@emotion/styled";
import LinkIcon from "../../public/assets/icons/linkIcon.tsx";
const LinkButton = ()=> {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <StyledLinkButton
                onClick={() => setIsOpen(true)}
                className="bg-amber-600"
                type="button"
                aria-label="Open Modal"
            >
                <LinkIcon className="w-16 h-16" />
            </StyledLinkButton>

        </div>
    );
}
export default LinkButton;
const StyledLinkButton = styled(LinkIcon)`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
`;