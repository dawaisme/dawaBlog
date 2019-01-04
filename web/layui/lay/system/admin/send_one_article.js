var editorElement;
if ( CKEDITOR.env.ie && CKEDITOR.env.version < 9 )
	CKEDITOR.tools.enableHtml5Elements( document );
CKEDITOR.config.height = 250;
CKEDITOR.config.width = 'auto';
CKEDITOR.config.filebrowserBrowseUrl='/browser/browse.php';
CKEDITOR.config.filebrowserUploadUrl='/uploader/upload.php';
var initSample = ( function() {
	var wysiwygareaAvailable = isWysiwygareaAvailable();
		//isBBCodeBuiltIn = !!CKEDITOR.plugins.get( 'bbcode' );

	return function() {
		editorElement = CKEDITOR.document.getById( 'editor' );
		if ( wysiwygareaAvailable ) {
			CKEDITOR.replace( 'editor' );
		} else {
			editorElement.setAttribute( 'contenteditable', 'true' );
			CKEDITOR.inline( 'editor' );
		}
	};

	function isWysiwygareaAvailable() {
		if ( CKEDITOR.revision == ( '%RE' + 'V%' ) ) {
			return true;
		}
		return !!CKEDITOR.plugins.get( 'wysiwygarea' );
	}
} )();

