import styled from 'styled-components';

function SignUpPassword({ setUser }) {
    return (
        <NameBox0>
            <NameBox1>사용할 비밀번호를 작성해주세요</NameBox1>
            <NameInput
                type="password"
                name=""
                placeholder="비밀번호"
                onChange={(e) =>
                    setUser((prev) => ({
                        ...prev,
                        password: e.target.value,
                    }))
                }
            />
        </NameBox0>
    );
}
export default SignUpPassword;

const NameBox1 = styled.div`
    width: 100%;
    height: 100px;
    font-size: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
`;
const NameBox0 = styled.div`
    width: 100%;
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const NameInput = styled.input`
    border-width: 0 0 2px;
    border-color: white;
    width: 100%;
    font-size: 22px;
    padding-left: 5px;
    padding-right: 50px;
    padding-bottom: 10px;
    background-color: transparent;
    &::placeholder {
        color: #edecec;
        opacity: 70%;
    }
    &:focus {
        outline: none;
        border-color: #e2bbe9;
        color: white;
    }
`;
