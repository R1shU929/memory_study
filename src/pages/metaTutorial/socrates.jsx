import styled from 'styled-components';
import { BackGroundImg } from '../../styles/common';
import Background from '../../assets/Img/backgroundImg/meta_1.png';
import CustomButton from '../../components/customButton/customButton';
import { useState } from 'react';
import { socratestQuestionList } from '../../constants/socratesQuestionList';
import ProgressBar from '../../components/progressBar/progressBar';
import { useNavigate } from 'react-router-dom';

function Socrates() {
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0); // 현재 질문 상태 0으로 설정
    const [answer, setAnswer] = useState({
        // answer의 객체 생성
        answer1: '', // 키: 값 - 요소
        answer2: '',
        answer3: '',
        answer4: '',
        answer5: '',
    });

    const handleUpDownQuestion = (upDown) => {
        if (upDown === 'up') {
            if (currentQuestion === 4) return; // 얼리 리턴문. cq가 4일때 실행 안 함.
            setCurrentQuestion((prev) => prev + 1); // cq가 4가 아닐때, scq에 +1의 값 저장.
        }
        if (upDown === 'down') {
            setCurrentQuestion((prev) => prev - 1);
        }
    };
    return (
        <BackImg>
            <MainQuestion>
                자신에 대해서 <br />
                얼마나 알고 있나요?
            </MainQuestion>
            <MiniQuestion>
                {socratestQuestionList[currentQuestion].question} &#40;
                {currentQuestion + 1}/5&#41;
            </MiniQuestion>
            <ProgressBar currentPageNum={currentQuestion} limit={4} />
            <MainAnswer>
                <textarea
                    name="AboutMeAnswer"
                    placeholder="답변이 어려우면 작성하지 않아도 괜찮아요 &#10;언제든 다시 작성이 가능합니다"
                    onChange={(e) =>
                        setAnswer((prev) => ({
                            ...prev,
                            [`answer${currentQuestion + 1}`]: e.target.value,
                            // 대괄호 백틱을 통해 키를 동적으로 받을수 있음. 안에 변수를 넣을 수 있다.
                        }))
                    }
                    value={answer[`answer${currentQuestion + 1}`]}
                    rows={6}
                    cols={40}
                />
            </MainAnswer>
            <MQButton>
                {currentQuestion === 0 ? (
                    <div></div>
                ) : (
                    <CustomButton
                        icon={'left'}
                        onClick={() => handleUpDownQuestion('down')}
                    >
                        이전 질문
                    </CustomButton>
                )}
                {currentQuestion === 4 ? (
                    <CustomButton icon={'right'} onClick={() => navigate('/')}>
                        홈으로
                    </CustomButton>
                ) : (
                    <CustomButton
                        icon={'right'}
                        onClick={() => handleUpDownQuestion('up')}
                    >
                        다음 질문
                    </CustomButton>
                )}
            </MQButton>
        </BackImg>
    );
}
export default Socrates;

const BackImg = styled.div`
    ${BackGroundImg(Background)}
    padding: 50% 30px 0 30px;
`;

const MainQuestion = styled.div`
    font-size: 25px;
    font-weight: 700;
    color: white;
    padding-bottom: 20px;
`;

const MiniQuestion = styled.div`
    font-size: 18px;
    font-weight: 700;
    color: #edececd7;
    padding-bottom: 20px;
`;

const MainAnswer = styled.div`
    textarea {
        font-size: 16px;
        height: 180px;
        resize: none;
        outline: none;
        border-radius: 10px;
        width: 100%;
        background-color: #00000046;
        color: white;
        padding: 10px;
        ::placeholder {
            color: #b3aeae;
            font-size: 14px;
            font-weight: 700;
        }
    }
`;

const MQButton = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5% 0;
`;
