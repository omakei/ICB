<x-guest-layout>
    <x-jet-authentication-card>
        <x-slot name="logo">
            <img class="img-avatar img-avatar96 img-avatar-thumb" src="{{asset('storage/dit-logo.jpg')}}" alt="organization logo"/>
        </x-slot>

        <div class="mb-4 text-sm text-gray-600">
            {{ __('Enter the Activation Key that you obtain from the adminstrator') }}
        </div>

        @if (session('status'))
            <div class="mb-4 font-medium text-sm text-red-600">
                {{ session('status') }}
            </div>
        @endif

        <x-jet-validation-errors class="mb-4" />

        <form method="POST" action="{{ route('activate') }}">
            @csrf

            <div class="block">
                <x-jet-label value="{{ __('Activation Code') }}" />
                <x-jet-input class="block mt-1 w-full" type="text" name="activation_code" :value="old('activation_code')" required autofocus />
            </div>

            <div class="flex items-center justify-end mt-4">
                <x-jet-button>
                    {{ __('Activate Account') }}
                </x-jet-button>
            </div>
        </form>
    </x-jet-authentication-card>
</x-guest-layout>
