import React from 'react';

import InputLabel from './InputLabel';

interface IProps {
  label: string;
  file?: any;
  comment?: string;
  validExtentions?: string;
  isMandatory?: boolean;
  error?: any;
  name: string;
  empId?: number;
  disabled?: boolean;
  handleChange: (obj: { target: { name: string; value: File | null } }) => void;
}

const FileUpload = (props: IProps) => {
  const { label, file, comment, validExtentions, isMandatory, error, name, empId, disabled, handleChange } = props;

  return (
    <div className="div">
      {InputLabel(label, isMandatory)}

      <div className='file-input form-elem"'>
        <input
          onChange={event => handleChange({ target: { name, value: (event.target as any).files[0] } })}
          key={empId || ''}
          name={name}
          title="Browse"
          type="file"
          accept={validExtentions || 'image/*'}
          disabled={disabled}
          id={label + '-input'}
        />
        <span className="button">Upload</span>
        <span className="label">{comment || (file ? file.name : 'No File Chosen')}</span>
      </div>
      {error && <span className="form-validation-error">{error}</span>}
    </div>
  );
};

export default FileUpload;
