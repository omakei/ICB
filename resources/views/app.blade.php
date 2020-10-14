<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'ICBIMS') }}</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700" rel="stylesheet">

        <!-- Styles -->
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        <link rel="stylesheet" href="{{ asset('css/base.css') }}">
        <link rel="stylesheet" id="css-main" href="{{ asset('assets/css/codebase.min.css') }}">
        <link rel="stylesheet" href="{{asset('assets/js/plugins/datatables/dataTables.bootstrap4.css')}}">
        <link rel="stylesheet" href="{{asset('assets/js/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css')}}">
        
        @routes
        <!-- Scripts -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.26.0/moment.min.js"></script>
        <script src="{{ asset('assets/js/core/jquery.min.js') }}" defer></script>
        {{-- <script src="{{ asset('assets/js/core/bootstrap.bundle.min.js') }}" defer></script> --}}
        <script src="{{asset('assets/js/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js')}}" defer></script>
        <script src="{{ asset('assets/js/codebase.core.min.js') }}" defer></script>
        <script src="{{ asset('assets/js/codebase.app.min.js') }}" defer></script>
        <script src="{{asset('assets/js/pages/op_installation.min.js')}}" defer></script>
        <script src="{{asset('assets/js/plugins/datatables/jquery.dataTables.min.js')}}" defer></script>
        <script src="{{asset('assets/js/plugins/datatables/dataTables.bootstrap4.min.js')}}" defer></script>
        <script src="{{asset('assets/js/pages/be_tables_datatables.min.js')}}" defer></script>
        <script src="{{ mix('js/app.js') }}" defer></script>
    </head>
    <body class="font-sans antialiased">
        @inertia

        <script>
            $(document).ready(function(){
                $('.toast').toast('show');
            });
        </script>
    </body>
</html>
