import React, { useState } from 'react';

function CommentsSection() {
  const [comments, setComments] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  // Handle the submission of a new comment
  const handleAddComment = () => {
    if (inputValue.trim()) {
      setComments([...comments, inputValue]);
      setInputValue('');
    }
  };

  // Handle editing a comment
  const handleEditComment = (index) => {
    setEditIndex(index);
    setEditValue(comments[index]);
  };

  // Handle saving the edited comment
  const handleSaveComment = () => {
    const updatedComments = [...comments];
    updatedComments[editIndex] = editValue;
    setComments(updatedComments);
    setEditIndex(null);
    setEditValue('');
  };


  const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <div className="comments-section" style={styles.commentsSection} id="comments">
    
      <h2 style={styles.title}>Comments</h2>

      <div style={styles.inputContainer}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a comment..."
          style={styles.input}
        />
        <button onClick={handleAddComment} style={styles.addButton}>
          Add Comment
        </button>
      </div>

      <ul style={styles.commentsList}>
        {comments.map((comment, index) => (
          <li key={index} style={styles.commentItem}>
            {editIndex === index ? (
              <div style={styles.editContainer}>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  style={styles.input}
                />
                <button onClick={handleSaveComment} style={styles.saveButton}>
                  Save
                </button>
              </div>
            ) : (
              <div style={styles.commentContainer}>
                <span style={styles.commentText}>{comment}</span>
                <div style={styles.buttonGroup}>
                  <button onClick={() => handleEditComment(index)} style={styles.editButton}>
                    Edit
                  </button>
                  <button onClick={() => handleDeleteComment(index)} style={styles.deleteButton}>
                    Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  commentsSection: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  input: {
    width: '75%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  addButton: {
    padding: '10px 20px',
    borderRadius: '4px',
    marginLeft: '4px',
    border: 'none',
    backgroundColor: '#000',
    color: '#fff',
    cursor: 'pointer',
  },
  commentsList: {
    listStyleType: 'none',
    padding: 0,
  },
  commentItem: {
    marginBottom: '10px',
  },
  commentContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  commentText: {
    flex: 1,
    marginRight: '10px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
  },
  editButton: {
    padding: '5px 10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#ffc107',
    color: '#fff',
    cursor: 'pointer',
  },
  deleteButton: {
    padding: '5px 10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#dc3545',
    color: '#fff',
    cursor: 'pointer',
  },
  editContainer: {
    display: 'flex',
    gap: '10px',
  },
  saveButton: {
    padding: '5px 10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#28a745',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default CommentsSection;
