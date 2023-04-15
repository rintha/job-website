/*
 * Copyright 2017 - Till Date Camfox Technologies India PLC.  All Rights Reserved.
 * @author vysakh
 * @since  Aug 4, 2017
 * @version 1.0
 */
$(function () {

    const $body = $('body');




    /*
     * Submit event for search input
     */
    $body.on('submit', '#searchForm', function (e) {
        e.preventDefault();

        /*
         * Calling getListData() for getting search list data
         */
        getListData($(this));
    });

    /*
     * Function for getting search data
     */
    function getListData(formObj) {
        /*
         * Getting values for search queries 
         */
        const url = formObj.data('url');
        var redirect_url = formObj.data('redirect');
        const search_key = $('#search').val();
        const search_location = $('#search_location').val();
        const search_experience = $('#search_experience').val();
        // redirect_url = redirect_url+'/'+search_key.replace(/\s/g, '-');
        // if(search_location !== "") {
        //     redirect_url = redirect_url+'-'+search_location.replace(/\s/g, '-');
        // }
        var token = getToken();
        if (search_key || search_location) {
            $.ajax({
                type: 'POST',
                url: url,
                data: {_token: token, search_key: search_key, search_location: search_location, search_experience: search_experience}
            }).done(function (data) {

                if (data.status == 1) {
                    window.location = redirect_url;
                }

            }).fail(function () {
                // This is intentional
            });
        } else {
            $('#searchError').removeClass('hidden');
            setTimeout(function () {
                $('#searchError').addClass('hidden');
            }, 3000);
        }
        /*
         * Sending data via ajax to controller
         */


    }


});


function getPendingProfile(errors) {
    var token = getToken();
    const url = getProfileLoadURL();

    $.ajax({
        type: 'POST',
        url: url,
        data: {_token: token},
        success: function (data) {
            $('#fields-missing').html('');
            $('#fields-missing').html(data);
            getLoadDatepicker();
            setTagInput();
            setSelection();
            $('#modelCloseButton').removeClass('hidden');
            $('#return-to-top').addClass('hidden');

            if (!errors['career_objective']) {
                $('#careerObjectiveProfileDiv').addClass('hidden');
            }else{
                $('#isDisplayBtn').addClass('confirmApplyOjective');
            }
            if (!errors['work_experience']) {
                $('#workProfileDiv').addClass('hidden');
            }else{
                $('#isDisplayBtn').addClass('confirmApplyExperience');
            }
            if (!errors['education']) {
                $('#educationProfileDiv').addClass('hidden');
            }else{
                $('#isDisplayBtn').addClass('confirmApplyEducation');
            }
            if (!errors['special_qualification']) {
                $('#qualificationDiv').addClass('hidden');
            }else{
                $('#isDisplayBtn').addClass('confirmApplyQualification');
            }

            $('#skillDiv').addClass('hidden');


            $('#certificationDiv').addClass('hidden');


            $('#industryDiv').addClass('hidden');


            $('#functionalAreaDiv').addClass('hidden');

            if (!errors['language']) {
                $('#languageDiv').addClass('hidden');
            }else{
                $('#isDisplayBtn').addClass('confirmApplyLanguage');
            }
            if (!errors['current_location'] && !errors['date_of_birth'] && !errors['address'] && !errors['gender'] && !errors['mobile'] && !errors['email'] && !errors['last_name'] && !errors['first_name']) {
                $('#personalProfileDiv').addClass('hidden');
            }else{
                $('#isDisplayBtn').addClass('confirmApplyPersonal');
            }
            if (!errors['declaration']) {
                $('#declarationProfileDiv').addClass('hidden');
            }else{
                $('#isDisplayBtn').addClass('confirmApplyDeclaration');
            }

            if (!errors['resume_title']) {
                $('#resumeUploadDiv').addClass('hidden');
            } else {
                $('#resumeUploadDiv').removeClass('hidden');
            }

            if (!errors['cover_letter']) {
                $('#coverletterUploadDiv').addClass('hidden');
            } else {
                $('#coverletterUploadDiv').removeClass('hidden');
            }

            if (!errors['cover_letter_title']) {
                $('#coverletterUploadDiv').addClass('hidden');
            } else {
                $('#coverletterUploadDiv').removeClass('hidden');
            }

            $('.download-resume').remove();
            $('.js-profile-enable').addClass('multy-modal');
            $('.deleteBtn').remove();

        },
        error: function (XMLHttpRequest) {
        }
    });
};