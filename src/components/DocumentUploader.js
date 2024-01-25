import React from 'react';
import { AppContext } from '../State';
import mammoth from 'mammoth';

const DocumentUploader = () => {
    const { globalState, setGlobalState } = React.useContext(AppContext); // React.useContext(AppContext) ?
    const { documentText } = globalState;


    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        console.log(file);

        if(file) {
            if(file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
                handleWordFile(file);
            } else if(file.type === 'text/plain') {
                handleTextFile(file);
            }
        }
    }
    const handleTextFile = (file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const text = e.target.result;
            setGlobalState({ documentText: text });
        };
        reader.readAsText(file);
    }
    const handleWordFile = (file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const arrayBuffer = e.target.result;
            const buffer = new Buffer(arrayBuffer);
            mammoth.convertToPlainText({ buffer: buffer })
                .then(function(result){
                    const text = result.value;
                    setGlobalState({ documentText: text })
                })
                .done();
        }
        reader.readAsArrayBuffer(file);
    }


    return (
        <div>
            <input type='file' onChange={handleFileUpload} />
            {documentText && (
                <div>
                    <h3>Document Content:</h3>
                    <textarea value={documentText} readOnly />
                </div>
            )}
        </div>
    )
}
export default DocumentUploader;