import React from 'react';

//import InputLabel from './InputLabel';
import FileUpload from './FileUpload';

interface IProps {
  handleChange: Function;
  image?: any;
  url?: string;
  label: string;
  isMandatory?: boolean;
  error?: any;
  name: string;
  empId?: string;
  disabled?: boolean;
  isCreateForm?: boolean;
}

class ImageInput extends React.Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      default: null,
      file: null,
      url: null,
    };
  }

  onInputChange = (event: { target: { name: string; value: File | null } }) => {
    const { handleChange } = this.props;

    let imageUrl;
    try {
      imageUrl = URL.createObjectURL(event.target.value);
    } catch (error) {
      imageUrl = null;
    }
    this.setState(
      {
        file: event.target.value,
        url: imageUrl,
      },
      () => handleChange(event)
    );
  };

  populateFieldFrom(props: IProps) {
    if (props.image) {
      this.setState({
        file: props.image,
        url: URL.createObjectURL(props.image),
        default: URL.createObjectURL(props.image),
      });
    } else if (props.url && this.state.default !== props.url)
      this.setState({
        file: null,
        url: props.url,
        default: props.url,
      });
  }

  componentWillMount() {
    this.populateFieldFrom(this.props);
  }

  componentWillReceiveProps(props: IProps) {
    this.populateFieldFrom(props);
  }

  getImageNameFromUrl(url: string) {
    return url ? url.split('/').slice(-1)[0].split('?')[0] : null;
  }

  render() {
    const { label, isMandatory, error, name, empId, disabled } = this.props;

    const shouldShowImage = (this.props.isCreateForm && this.state.file) || !this.props.isCreateForm;

    return (
      <div className="form-group">
        <FileUpload
          handleChange={this.onInputChange}
          isMandatory={isMandatory}
          error={error}
          name={name}
          disabled={disabled}
          label={label}
          comment={
            (this.state.file && this.state.file.name) ||
            (shouldShowImage && this.getImageNameFromUrl(this.state.url)) ||
            'No file selected'
          }
        />

        {shouldShowImage && this.state.url && (
          <label className="form-label dark--text" id={this.props.label + '-label'}>
            Selected/Current image:
          </label>
        )}
        {shouldShowImage && this.state.url && (
          <img src={this.state.url} className="mt-10 image-thumbnail d-block" alt={empId || 'img'} />
        )}
      </div>
    );
  }
}

export default ImageInput;
