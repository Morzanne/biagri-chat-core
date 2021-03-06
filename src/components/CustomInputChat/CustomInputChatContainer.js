import React, { PureComponent } from 'react';

import { ChatAutoComplete, withTranslationContext } from 'stream-chat-react';
import { ImageDropzone, FileUploadButton } from 'react-file-utils';

// Copy pasted from `stream-chat-react/src/components/MessageInputFlat.js`
// TODO: remove copy pasting
class CustomInputChatContainer extends PureComponent {
  static defaultProps = {
    grow: true,
    disabled: false
  };

  renderEmojiPicker = () => {
    if (this.props.emojiPickerIsOpen) {
      return (
        <div
          className="str-chat__input-flat--emojipicker"
          ref={this.props.emojiPickerRef}
        >
          <Picker
            native
            emoji="point_up"
            title="Pick your emoji…"
            onSelect={this.props.onSelectEmoji}
            color="#006CFF"
            showPreview={false}
            emojisToShowFilter={filterEmoji}
          />
        </div>
      );
    }
  };

  render() {
    const { t } = this.props;
    const SendButton = this.props.SendButton;
    return (
      <div className="str-chat__input-large">
        <ImageDropzone
          accept={this.props.acceptedFiles}
          multiple={this.props.multipleUploads}
          disabled={this.props.numberOfUploads >= this.props.maxNumberOfFiles}
          handleFiles={this.props.uploadNewFiles}
        >
          <div className="str-chat__input">
            {this.props.imageOrder.length > 0 && (
              <ImagePreviewer
                imageUploads={this.props.imageOrder.map(
                  id => this.props.imageUploads[id]
                )}
                handleRemove={this.props.removeImage}
                handleRetry={this.props.uploadImage}
                handleFiles={this.props.uploadNewFiles}
                multiple={this.props.multipleUploads}
                disabled={
                  this.props.numberOfUploads >= this.props.maxNumberOfFiles
                }
              />
            )}
            {this.props.fileOrder.length > 0 && (
              <div className="str-chat__file-uploads">
                <FilePreviewer
                  uploads={this.props.fileOrder.map(
                    id => this.props.fileUploads[id]
                  )}
                  handleRemove={this.props.removeFile}
                  handleRetry={this.props.uploadFile}
                  handleFiles={this.props.uploadNewFiles}
                />
              </div>
            )}
            {this.renderEmojiPicker()}
            <div className="str-chat__input--textarea-wrapper">
              <ChatAutoComplete
                users={this.props.getUsers()}
                commands={this.props.getCommands()}
                innerRef={this.props.textareaRef}
                handleSubmit={e => this.props.handleSubmit(e)}
                onChange={this.props.handleChange}
                onSelectItem={this.props.onSelectItem}
                value={this.props.text}
                rows={1}
                maxRows={this.props.maxRows}
                placeholder={t('Type your message')}
                onPaste={this.props.onPaste}
                grow={this.props.grow}
                disabled={this.props.disabled}
              />

              <span
                className="str-chat__input-emojiselect"
                onClick={this.props.openEmojiPicker}
              >
                <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.108 8.05a.496.496 0 0 1 .212.667C10.581 10.147 8.886 11 7 11c-1.933 0-3.673-.882-4.33-2.302a.497.497 0 0 1 .9-.417C4.068 9.357 5.446 10 7 10c1.519 0 2.869-.633 3.44-1.738a.495.495 0 0 1 .668-.212zm.792-1.826a.477.477 0 0 1-.119.692.541.541 0 0 1-.31.084.534.534 0 0 1-.428-.194c-.106-.138-.238-.306-.539-.306-.298 0-.431.168-.54.307A.534.534 0 0 1 9.538 7a.544.544 0 0 1-.31-.084.463.463 0 0 1-.117-.694c.33-.423.742-.722 1.394-.722.653 0 1.068.3 1.396.724zm-7 0a.477.477 0 0 1-.119.692.541.541 0 0 1-.31.084.534.534 0 0 1-.428-.194c-.106-.138-.238-.306-.539-.306-.299 0-.432.168-.54.307A.533.533 0 0 1 2.538 7a.544.544 0 0 1-.31-.084.463.463 0 0 1-.117-.694c.33-.423.742-.722 1.394-.722.653 0 1.068.3 1.396.724zM7 0a7 7 0 1 1 0 14A7 7 0 0 1 7 0zm4.243 11.243A5.96 5.96 0 0 0 13 7a5.96 5.96 0 0 0-1.757-4.243A5.96 5.96 0 0 0 7 1a5.96 5.96 0 0 0-4.243 1.757A5.96 5.96 0 0 0 1 7a5.96 5.96 0 0 0 1.757 4.243A5.96 5.96 0 0 0 7 13a5.96 5.96 0 0 0 4.243-1.757z"
                    fillRule="evenodd"
                  />
                </svg>
              </span>

              <FileUploadButton
                multiple={this.props.multipleUploads}
                disabled={
                  this.props.numberOfUploads >= this.props.maxNumberOfFiles
                }
                accepts={this.props.acceptedFiles}
                handleFiles={this.props.uploadNewFiles}
              >
                <span className="str-chat__input-fileupload">
                  <svg
                    width="14"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 .5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5S.5 10.59.5 7 3.41.5 7 .5zm0 12c3.031 0 5.5-2.469 5.5-5.5S10.031 1.5 7 1.5A5.506 5.506 0 0 0 1.5 7c0 3.034 2.469 5.5 5.5 5.5zM7.506 3v3.494H11v1.05H7.506V11h-1.05V7.544H3v-1.05h3.456V3h1.05z"
                      fillRule="nonzero"
                    />
                  </svg>
                </span>
              </FileUploadButton>
              {SendButton && (
                <SendButton sendMessage={this.props.handleSubmit} />
              )}
            </div>
          </div>
          <div>
            <div className="str-chat__input-footer">
              {/* TODO: fix the padding and remove this */}
            </div>
          </div>
        </ImageDropzone>
      </div>
    );
  }
}

export default withTranslationContext(CustomInputChatContainer);
