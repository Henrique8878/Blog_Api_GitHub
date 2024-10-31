interface typePropsVariablesCard{
    typeVariableOrNo:"variable"| "assignment"
}

export function VariablesCard({typeVariableOrNo}:typePropsVariablesCard){
    return(

        typeVariableOrNo=="variable"?(
            <span className="flex gap-2 text-base_text">
                    <strong className="text-blue">let</strong>
                    <span>foo&nbsp;&nbsp;= </span>
                    <strong className="text-green-600">42</strong>
                    <div className="ml-5">
                        <span className="text-base_span">// foo is now a number</span>
                    </div>
            </span>
        ):
        (
            <span className="flex gap-2 text-base_text">
                
                <span>foo&nbsp;&nbsp;= </span>
                <strong className="text-green-600">42</strong>
                <div className="ml-5">
                    <span className="text-base_span">// foo is now a number</span>
                </div>
            </span>
        )
    )
}