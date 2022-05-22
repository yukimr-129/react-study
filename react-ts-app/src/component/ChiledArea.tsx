import { memo } from "react";

const style = {
    with: '100%',
    height: '200px',
    backgroundColor: 'khaki'
};

export const ChiledArea = memo((props: any) => {
    const { open, onClickClose } = props;
    const data = [...Array(2000).keys()]
    console.log('再レンダリング');
    
    

    return (
        <>
            {open ? (
                <div style={style}>
                    <p>子コンポーネント</p>
                    <button onClick={onClickClose}>閉じる</button>
                </div>
            ): null}
        </>
    );
});