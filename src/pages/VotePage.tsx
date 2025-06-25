import React from 'react';
import styled from '@emotion/styled';
import Vote from '../components/Vote';

const VotePage = () => {
  const mockOptions = [
    { id: '1', text: '투표 • 이름' },
    { id: '2', text: '투표 • 이름' },
    { id: '3', text: '투표 • 이름' },
    { id: '4', text: '투표 • 이름' },
  ];

  const handleVoteSubmit = (selectedOption: string | null) => {
    console.log('Selected option:', selectedOption);
  };

  return (
    <PageContainer>
      <ContentWrapper>
        <Vote options={mockOptions} onSubmit={handleVoteSubmit} />
      </ContentWrapper>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  background-color: white;

  @media (max-width: 768px) {
    padding: 24px 16px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 930px;

  @media (max-width: 1024px) {
    max-width: 768px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export default VotePage;
