import rest_framework_filters as filters

class UserFilter(filters.FilterSet):
    dateJoined__lt = filters.IsoDateTimeFilter(method='filter_dateJoined_lt')
    dateJoined__gt = filters.IsoDateTimeFilter(method='filter_dateJoined_gt')
    lastLogin__lt = filters.IsoDateTimeFilter(method='filter_lastLogin_lt')
    lastLogin__gt = filters.IsoDateTimeFilter(method='filter_lastLogin_gt')
    locked = filters.BooleanFilter(method='filter_locked')
    group__name = filters.CharFilter(method="filter_group_name")
    username__contains = filters.CharFilter(method='filter_username_contains')
    firstName = filters.CharFilter(field_name="first_name")
    lastName = filters.CharFilter(field_name="last_name")
    email__contains = filters.CharFilter(method='filter_email__contains')

    
    class Meta:
        model = EnterpriseUser
        fields = (
            'username',
            'username__contains',
            'email',
            'email__contains',
            'dateJoined__gt',
            'dateJoined__lt',
            'lastLogin__gt',
            'lastLogin__lt',
            'firstName',
            'lastName',
            'group__name',
            'locked'
        )
    
    def filter_group_name(self, qs, name, value):
        return qs.filter(group__name=value)

    def filter_username_contains(self, qs, name, value):
        return qs.filter(username__contains=value)