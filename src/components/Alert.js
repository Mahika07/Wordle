import React from 'react'

export default function Alert(props) {
    return (
        <>
            <div style={{ height: '5em' }}>
                {props.alert &&
                    <div className={`alert alert-${props.alert.type}`} role="alert" style={{ textAlign: 'center' }}><strong>
                        {props.alert.msg}
                    </strong>
                    </div>}
            </div>
        </>
    )
}