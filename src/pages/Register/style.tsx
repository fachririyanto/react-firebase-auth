import styled from "@emotion/styled";

export const Wrapper = styled.section( {
    display: 'flex',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
} );

export const Container = styled.div( {
    margin: 'auto',
    width: '100%',
    maxWidth: '400px',
} );

export const Head = {
    Wrap: styled.figure( {
        display: 'block',
        margin: '0 0 32px',
        minHeight: '80px',
    } ),

    Img: styled.img( {
        display: 'block',
        margin: 'auto',
        width: '100%',
        maxHeight: '80px',
    } ),
};

export const Form = {
    Card: styled.form( {
        position: 'relative',
        padding: '40px 24px',
        backgroundColor: '#fff',
        boxShadow: '0 1px 6px rgba(0,0,0,.1)',
        borderRadius: '6px',
    } ),

    Error: styled.div( {
        marginBottom: '20px',
        padding: '12px',
        fontSize: '1.55rem',
        textAlign: 'center',
        backgroundColor: '#ffc5c5',
        borderRadius: '6px',
    } ),

    Title: styled.h1( {
        margin: '0 0 24px',
        fontWeight: 500,
        fontSize: '2.6rem',
        lineHeight: 1.2,
        textAlign: 'center',
        textTransform: 'uppercase',
    } ),

    Field: styled.div( {
        marginBottom: '16px',
    } ),

    Action: styled.div( {} ),

    Link: styled.footer`
        margin: 24px 0 0;
        padding-top: 24px;
        text-align: center;
        border-top: 1px solid rgba(0,0,0,.1);

        a {
            font-weight: 500;
            color: #333;
            text-decoration: underline;
        }
    `,
};