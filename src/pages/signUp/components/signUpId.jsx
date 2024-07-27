import styled from 'styled-components';

function SignUpId({ setUser }) {
    return (
        <NameBox0>
            <NameBox1>사용 할 아이디를 작성해주세요.</NameBox1>
            <IdBox>
                <NameInput2
                    type="text"
                    name=""
                    placeholder="아이디 최대 10글자"
                    onChange={(e) => {
                        setUser((prev) => ({
                            ...prev,
                            id: e.target.value,
                        }));
                    }}
                />
                <IdCheckBt type="Button" value="중복확인" />
            </IdBox>
        </NameBox0>
    );
}
export default SignUpId;

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
const IdCheckBt = styled.input`
    border: 0px;
    width: 20%;
    height: 43px;
    border-radius: 10px;
    font-size: 14px;
    background-color: #65628b;
    color: #ffffff;
    margin-left: 10px;
    cursor: pointer;
    &:hover {
        background-color: #e2bbe9a8;
        transition: 0.3s;
        color: #ffffff;
    }
`;
const NameInput2 = styled.input`
    border-width: 0 0 2px;
    border-color: white;
    width: 75%;
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
const IdBox = styled.div`
    width: 100%;
    display: flex;
`;
