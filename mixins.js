var mixins = {
    preventNonNumbers: function(e) {
        e.target.value = e.target.value.replace(/\D/g, '')
    },
    phoneMask: function(e) {
        var currentValue = e.target.value;

        var containsInvalidChars = function(currentValue) {
            return !(/^[0-9/]{0,}$/.test(currentValue))
        }

        var containsOnlyTwoNumbers = function(currentValue) {
            return /^[0-9]{2}$/.test(currentValue)
        }

        var containsOnlyTwoNumbersSlashAndTwoNumbers = function(currentValue) {
            return /^[0-9]{2}\/[0-9]{2}$/.test(currentValue)
        }

        var moreNumbersThanDate = function(currentValue) {
            return e.target.value.replace(/\D/g, '').length > 8
        }

        var invalidFormat = function(currentValue) {
        	var inputNumbers = currentValue.replace(/\D/g, '');
        	if(inputNumbers[0]>3)
        		return true
        	if(inputNumbers.slice(0,2)>31)
        		return true
        	if(inputNumbers[2]>1)
        		return true
        	if(inputNumbers.slice(2,4)>12)
        		return true
        	if(inputNumbers.slice(4,8)>(new Date().getFullYear()))
        		return true
        	return false
        }

        var isDeleting = function(currentValue) {
            mixins.phoneMaskPrevoiusValue = mixins.phoneMaskPrevoiusValue || currentValue;

            return currentValue.length < mixins.phoneMaskPrevoiusValue.length
        }

        var returnInputPreviousValue = function() {
            e.target.value = mixins.phoneMaskPrevoiusValue || currentValue
        }

        var addForwardSlash = function() {
            e.target.value = e.target.value + '/'
        }


        if (containsInvalidChars(currentValue) || moreNumbersThanDate() || invalidFormat(currentValue))
            returnInputPreviousValue()
        else if (!isDeleting(currentValue)) {
            if (containsOnlyTwoNumbers(currentValue))
                addForwardSlash()
            if (containsOnlyTwoNumbersSlashAndTwoNumbers(currentValue))
                addForwardSlash()
        }


        mixins.phoneMaskPrevoiusValue = e.target.value
    }
}
